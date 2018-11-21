import React from 'react';
import '../../Assets/Styles/Ingredient.css';
import { connect } from 'react-redux';
import {
  increasePrice,
  decreasePrice,
} from '../../Actions/Action';

// import carrotCakeImage from '../../Assets/CarrotCake.jpg';



class Ingredient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const imageClass = `${this.props.ingredient.type}image`;
    const description = `${this.props.ingredient.description}
    Allergènes: ${this.props.ingredient.allergènes}`;
    const divStyle = {
      // backgroundImage: `url(${carrotCakeImage})`,
      backgroundImage: `url(${this.props.ingredient.img})`,
    };

    return (
      <div className="ingredient" draggable="true" id={"ingredient"+this.props.ingredient.id}>
        <div className={this.props.ingredient.type} style={divStyle} title={description} onClick={() => this.props.addToPrice(this.props.ingredient.price)}/>
        <p className="ingredientName">{this.props.ingredient.name}</p>
        <div onClick={() => this.props.substractFromPrice(this.props.ingredient.price)}><b>Remove</b></div>
      </div>
    );
  }
}

const mapStateToProps = store => store;

const mapDispatchToProps = dispatch => ({
  addToPrice: (amount) => dispatch(increasePrice(amount)),
  substractFromPrice: (amount) => dispatch(decreasePrice(amount)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Ingredient);
