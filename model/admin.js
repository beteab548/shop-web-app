const products = [];
class product {
  constructor(title, imageUrl, price, description) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }
  saveData() {
    products.push(
      JSON.parse(this.title, this.imageUrl, this.price, this.description)
    );
  }
  fetchData() {
    console.log(products);
    return products;
  }
}
module.exports = product;
