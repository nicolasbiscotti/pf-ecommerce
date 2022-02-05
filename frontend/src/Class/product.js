export function Product() {
  this.name = "";
  this.salePrice = "";
  this.purchasePrice = "";
  this.stock = "";
  this.description = "";
  this.mainImg = "";
  this.imgs = [];
  this.categories = [];
  this.suppliers = [];
  this.resBackUpdateProduct = {};
}
/* 
Product.prototype.setName = function (payload) {
  return { ...this, name: payload };
};
Product.prototype.setSalePrice = function (payload) {
  return { ...this, [this.salePrice]: payload };
};
Product.prototype.setPurchasePrice = function (payload) {
  return { ...this, [this.purchasePrice]: payload };
};
Product.prototype.setStock = function (payload) {
  return { ...this, [this.stock]: payload };
};
Product.prototype.setDescription = function (payload) {
  return { ...this, [this.description]: payload };
};
Product.prototype.setMainImg = function (payload) {
  return { ...this, [this.mainImg]: payload };
}; */
