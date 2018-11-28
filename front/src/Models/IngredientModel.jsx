class IngredientModel {
  constructor(name, category, price, availability, image, infobulle, allergies, goWith) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.availability = availability;
    this.image = image;
    this.infobulle = infobulle;
    this.allergies = allergies;
    this.goWith = goWith;
  }
}

const carrotCake = new IngredientModel('carrot cake', 'base', 2, true, 'url_image_carrot_cake','un délicieux gâteau aux carottes', 'Carottes', ['cream cheese', 'framboise', 'amande']);
const ingredients = [];
ingredients.push(carrotCake);

export default IngredientModel;
