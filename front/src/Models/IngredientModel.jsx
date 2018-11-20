class IngredientModel {
  constructor(name, category, price, availability, image, infobulle, allergies) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.availability = availability;
    this.image = image;
    this.infobulle = infobulle;
    this.allergies = allergies
  }
}

let carrotCake = new IngredientModel('carrot cake','base',2,true,url_image_carrot_cake,"un délicieux gâteau aux carottes", "Carottes");
let ingredients = [];
ingredients.push(carrotCake);

export default IngredientModel;
