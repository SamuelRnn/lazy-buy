import { product } from "../../../../prisma";
import camelize from "../../../../utils/camelize";
//------------------------------------------
//TODO: error managment
//------------------------------------------
/*
query params =
  page=1 default
  search= str
  category= str
  sort= str
  company= str

*/
function parseNullfromJSON(json) {
  return JSON.parse(
    JSON.stringify(
      json,
      (key, value) => {
        return value === "null" ? null : value;
      },
      2
    )
  );
}
export default async function getProduct(req, res) {
  if (req.method !== "GET")
    return res.status(405).json({ message: "Not found" });
  const filters = parseNullfromJSON(req.query);
  //generar variable mutable de los productos
  let products;
  let count;
  let whereSearchQuery = {
    OR: [
      {
        name: {
          contains: filters.search,
          mode: "insensitive",
        },
      },
      {
        description: {
          contains: filters.search,
          mode: "insensitive",
        },
      },
      {
        category: {
          contains: filters.search,
          mode: "insensitive",
        },
      },
      {
        company: {
          name: {
            contains: filters.search,
            mode: "insensitive",
          },
        },
      },
    ],
  };
  if (filters.search) {
    count = await product
      .findMany({
        where: whereSearchQuery,
      })
      .then((res) => res.length);
    products = await product.findMany({
      where: whereSearchQuery,
      include: {
        company: {
          select: {
            name: true,
          },
        },
      },
    });
  }
  //busqueda por categoria
  if (filters.category && !filters.search) {
    camelize;
    products = await product.findMany({
      where: {
        category: {
          equals: camelize(filters.category),
          mode: "default",
        },
      },
      include: {
        company: {
          select: {
            name: true,
          },
        },
      },
    });
    count = products.length;
  }
  //------------------------------------------
  if (filters.sort) {
    if (filters.sort === "price_asc") {
      products.sort((p1, p2) => p1.price - p2.price);
    }
    if (filters.sort === "price_desc") {
      products.sort((p1, p2) => p2.price - p1.price);
    }
    if (filters.sort === "rating") {
      products.sort((p1, p2) => p2.averageRating - p1.averageRating);
    }
  }
  //------------------------------------------
  //filters de verdad
  if (filters.price_range) {
    const slicedRange = filters.price_range.split(",");
    let range = {
      min_price: slicedRange[0],
      max_price: slicedRange[1],
    };
    if (range.min_price === "min") {
      range.min_price = 0;
    } else {
      range.min_price = parseInt(range.min_price);
    }
    if (range.max_price === "max") {
      range.max_price = Infinity;
    } else {
      range.max_price = parseInt(range.max_price);
    }

    products = products.filter((p) => {
      console.log(
        p.price,
        range.min_price,
        p.price >= range.min_price,
        range.max_price,
        p.price <= range.max_price
      );
      return p.price >= range.min_price && p.price <= range.max_price;
    });
    count = products.length;
  }
  //------------------------------------------
  products = products.slice(
    (parseInt(filters.page) - 1) * 10,
    (parseInt(filters.page) - 1) * 10 + 10
  );
  return res.status(200).json({ results: products, count });
}
