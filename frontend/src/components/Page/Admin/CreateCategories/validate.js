export const validateCreateCategory = (createCategory) => {
  const errors = {};
  if (!/^[a-zA-Z]+(\s*[a-zA-Z]*)*[a-zA-Z]+$/.test(createCategory.name)) {
    errors.name = "*";
  }

  if (!isUrl(createCategory.img)) {
    errors.img = "*";
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
