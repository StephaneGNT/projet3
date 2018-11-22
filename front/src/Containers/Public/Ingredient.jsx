import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../Assets/Styles/Ingredient.css';

const mapStateToProps = (state) => {
  // console.log("state in ingredient", state);
  return ({
    defaultImage: state.defaultImage,
  });
};

// const mapDispatchToProps = () => {};

class Ingredient extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // console.log(this.props);
  }

  selectDefaultImage = (defaultImage) => {
    // console.log("defaultImage ", defaultImage);
    let urlImage = '';
    switch (this.props.ingredient.type) {
      case 'Base': urlImage = defaultImage.cakeBases; break;
      case 'Glacage': urlImage = defaultImage.cakeIcings; break;
      case 'Filling': urlImage = defaultImage.cakeFillings; break;
      default: urlImage = defaultImage.cakeToppings; break;
    }
    return urlImage;
  }

  render() {
    // const imageClass = `${this.props.ingredient.type}image`;
    const description = `${this.props.ingredient.info}
Allergènes: ${this.props.ingredient.allerg}`;

    const defaultImage = this.selectDefaultImage(this.props.defaultImage);

    const divStyle = {
      // backgroundImage: `url(${carrotCakeImage})`,
      backgroundImage: this.props.ingredient.img === '' ? `url(${defaultImage})` : `url(${this.props.ingredient.img})`,
    };

    return (
      <div className="ingredient">
        <div className={this.props.ingredient.type} style={divStyle} title={description} draggable="true" />
        <p className="ingredientName">{this.props.ingredient.name}</p>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(Ingredient);
