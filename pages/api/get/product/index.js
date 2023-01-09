import { product } from "../../../../prisma";
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
export default async function getProduct(req, res) {
  if (req.method !== "GET")
    return res.status(405).json({ message: "Not found" });
  console.log(req.query);
  const filters = JSON.parse(
    JSON.stringify(
      req.query,
      (key, value) => {
        return value === "null" ? null : value;
      },
      2
    )
  );
  console.log(filters);
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
    count = await product.findMany({
      where: whereSearchQuery,
    });
    products = await product.findMany({
      where: whereSearchQuery,
      include: {
        company: {
          select: {
            name: true,
          },
        },
      },
      take: parseInt(filters.page) * 10,
      skip: parseInt(filters.page) * 10 - 10,
    });
  } else if (filters.category) {
    products = await product.findMany({
      where: {
        category: {
          contains: filters.category,
          mode: "insensitive",
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
  }
  if (filters.sort) {
    if (filters.sort === "price_asc") {
      products.sort((p1, p2) => p1.price - p2.price);
    }
    if (filters.sort === "price_desc") {
      products.sort((p1, p2) => p2.price - p1.price);
    }
  }
  return res.status(200).json({ results: products, count: count.length });
  //   //------------------------------------------
  //   if (filters.category) {
  //     const productsSinQuery = await product.findMany({
  //       where: {
  //         category: {
  //           contains: filters.category,
  //         },
  //       },
  //       include: {
  //         company: {
  //           select: {
  //             name: true,
  //           },
  //         },
  //       },
  //     });
  //     return res.status(200).json(productsSinQuery);
  //   }
  //   //------------------------------------------
  // const productsSinQuery = await product.findMany({
  //   include: {
  //     company: {
  //       select: {
  //         name: true,
  //       },
  //     },
  //   },
  // });
  // return res.status(200).json(productsSinQuery);
}
