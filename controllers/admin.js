const product = require("../model/admin");
exports.getaddproduct = (req, res, next) => {
  res.render("./admin/add-product.ejs");
};
exports.getProducts = (req, res, next) => {
  const produts = new product("book", "imageUrl", "price", "description");
  produts.saveData();
  const data = produts.fetchData();
  console.log(data);
  res.render("./admin/products.ejs", {
    title: data.title,
    imageUrl: data.imageUrl,
    price: data.price,
    description: data.description,
  });
};
