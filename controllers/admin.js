const product = require("../model/admin");
const formidable = require("formidable");
const form = new formidable.IncomingForm();
//here i render the page of add-produts
exports.getaddproduct = (req, res, next) => {
  res.render("./admin/add-product.ejs", { pageTitle: "add-product" });
};
exports.getProducts = (req, res, next) => {
  form.parse(req, (err, fields, file) => {
    const products = new product(
      fields.title,
      fields.imageUrl,
      fields.price,
      fields.description
    );
    products.saveData();
    const fetchedData = products.fetchData();
    //render the page of products
    res.render("./admin/products.ejs", {
      pageTitle: "products",
      title: fetchedData[0].title,
      imageUrl: fetchedData[0].imageUrl,
      price: fetchedData[0].price,
      description: fetchedData[0].description,
    });
  });
};
