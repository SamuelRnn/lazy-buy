import { product, $disconnect } from "../../../../prisma";
//------------------------------------------
//TODO: error managment
//------------------------------------------
export default async function getProduct(req, res) {
  if (req.method !== "GET")
    return res.status(405).json({ message: "Not found" });

  const filters = req.query;
  console.log(filters);
  if (filters.search === "null") {
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
}

// export default async function filterProductsByCat (req, res) {
//     if(req.method !== "GET")
//     return res.status(405).json({ message: "Not found" });

//     const category = req.query
//     const filteredProductsByCat = await product.findMany({
//         where: {
//             category,
//         }
//     })
//     return res.status(200).json(filteredProductsByCat)
// }
