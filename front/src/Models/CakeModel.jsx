class CakeModel {
  constructor(id, [ingredients], size, customization, comments, price) {
    this.id = id;
    this.ingredients = [ingredients];
    this.size = size;
    this.customization = customization; // aucune, message, photo 2D, photo 3D
    this.comments = comments;
    this.price = price;
  }
}

export default CakeModel;
