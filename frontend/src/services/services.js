export const toUpperCaseFirstCharacter = (str) => {
  const newStr = str.replace(str[0], str[0].toUpperCase());
  return newStr;
};
