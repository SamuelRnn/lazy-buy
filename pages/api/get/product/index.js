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
  const filters = JSON.parse(
    JSON.stringify(
      req.query,
      (key, value) => {
        return value === "null" ? null : value;
      },
      2
    )
  );
  // console.log(filters);
  // return res.status(200).json([]);

  // const query = {};
  if (filters.search) {
    let products = await product.findMany({
      where: {
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
      },
      include: {
        company: {
          select: {
            name: true,
          },
        },
      },
    });
    return res.status(200).json(products);
  }
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
  const productsSinQuery = await product.findMany({
    include: {
      company: {
        select: {
          name: true,
        },
      },
    },
  });
  return res.status(200).json(productsSinQuery);
}
