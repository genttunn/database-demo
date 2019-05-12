export default class Product {
  constructor(id, productLineId, description, quantity, unit, price) {
    this.id = id;
    this.productLineId = productLineId;
    this.description = description;
    this.quantity = quantity;
    this.unit = unit;
    this.price = price;
  }
}
