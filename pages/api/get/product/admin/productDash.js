import { product } from "../../../../../prisma/index";

export default async function productsAdmin(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Not found" });
  }
  let filter = req.query;
  let { filterOne, filterTwo } = filter;
  try {
    if (filterOne === "All" && filterTwo === "All") {
      const all = await product.findMany({
        include: { company: { select: { name: true, owner: true } } },
      });
      return res.status(200).json(all);
    }

    const productDash = await product.findMany({
      where: {
        ...(filterTwo !== "All" && { isActive: filterTwo === "true"?false:true }),
        ...(filterOne !== "All" && { category: filterOne })
      },
      include: { company: { select: { name: true, owner: true } } },
    });
    return res.status(200).json(productDash)

    /* if (filterOne == "All" && filterTwo !== "All") {
    const productFiltered = await product.findMany({
      where: { category: filter },
      include: { company: { select: { name: true, owner: true } } },
    });
    return res.status(200).json(productFiltered);
  }

  if (filter === "All") {
      const productDash = await product.findMany({
          include: { company: { select: { name: true, owner: true } } },
        });
        return res.status(200).json(productDash);
    } */
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
}
