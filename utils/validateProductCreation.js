export default function validateProduct(formData) {
  if (parseFloat(formData.price) > 10000)
    return { ok: false, error: "Price must be below $10000" };
  if (formData.stock.split(".").length > 1)
    return { ok: false, error: "Stock must be an integer" };

  return { ok: true };
}
