function camelize(str) {
  const aux = str.split("");
  aux[0] = aux[0].toUpperCase();
  return aux.join("");
}
export default camelize;
