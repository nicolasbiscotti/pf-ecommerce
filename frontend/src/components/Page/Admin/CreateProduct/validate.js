export const validateCreateProduct = (createProduct) => {
  const errors = {};
  if (createProduct.hasOwnProperty("discount")) {
    if (createProduct.discount < "0") {
      errors.discount = "*";
    }
  }
  if (!/^[a-zA-Z]+(\s*[a-zA-Z]*)*[a-zA-Z]+$/.test(createProduct.name)) {
    errors.name = "*";
  }
  if (createProduct.salePrice < "0") {
    errors.salePrice = "*";
  }
  if (createProduct.purchasePrice < "0") {
    errors.purchasePrice = "*";
  }
  if (createProduct.stock < "0") {
    errors.stock = "*";
  }
  if (createProduct.description === "") {
    errors.description = "*";
  }
  if (!isUrl(createProduct.mainImg)) {
    errors.mainImg = "*";
  }
  if (createProduct.imgs.length <= 0) {
    errors.imgs = "*";
  }
  if (createProduct.categories.length <= 0) {
    errors.categories = "*";
  }
  if (createProduct.suppliers.length <= 0) {
    errors.suppliers = "*";
  }
  return errors;
};

const isUrl = (str) => {
  //según veo no sirve para nada :(
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
};
