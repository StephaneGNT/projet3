import React, { Component } from 'react';
import { Row } from 'reactstrap';
import { connect } from 'react-redux';
import NavArrowsLayout from './Navigation/NavArrowsLayout';
import Progressbar from './Progressbar';
import '../../Assets/Styles/OrderDetail.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, FormGroup, Label, Input,
} from 'reactstrap';
import '../../Assets/Styles/Confirmation.css';


class Confirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  changeConfirmation = () => {
    const { cake, type, size, occasion, quantity, ingredients, customization, price, story } = this.props;
    if (type === 'brownie' || type === 'cookie') {
      return (
      <p>
        A l'occasion d'un(e) 
          {occasion}, vous avez commandé 
          {quantity} {type} de taille {size} 
          <br></br>
        Personnalisation: 
      {customization}<br></br>La composition de votre {type}:  {(ingredients.map(item =>  <div>{item.name}</div>))} 
        <br></br> 
      Montant de votre commande : {price}€</p>
      )
    }
    if (type === 'cheesecake') {
      return ( <p>
      A l'occasion d'un(e) {occasion} vous avez commandé un {type} <br></br>Personnalisation: {customization}<br></br><br></br>
      La composition de votre cheesecake: {(ingredients.map(item =>  <div>{item.name}</div>))}
      <br></br>
      <br></br>
      Montant de votre commande : 
        {price}€</p>
      )
    }
    if (type === 'macaron') {
      return (
       <p>
      A l'occasion d'un(e) 
      {occasion}
       vous avez commandé
       {quantity} {type} de taille {size}
         <br/>
       Personnalisation:{customization}
         <br/>
      La composition de vos macarrons:
         {(ingredients.map(item =>  <div>{item.name}</div>))} 
         <br/>
      Montant de votre commande : {price}€
      </p>
      )
    }
    else {
      return <p>A l'occasion d'un(e) {occasion},<br></br>votre commande est un {type} de {story} étage(s) pour {size} personnes qui a une décoration {customization}<br></br>La composition de votre gateau:
        <br></br>
      {(ingredients.map(item =>  <div>{item.name}</div>))}
          <br></br>
      Montant de votre commande : {price}€</p>
    }
  }

  render() {
    return (

      <div>
        <Card id="Card">
          <CardBody>
            <CardTitle>Votre commande :</CardTitle>
            <CardText>
              {this.changeConfirmation()}
            </CardText>
          </CardBody>
        </Card>
        <br></br>

<p> Conditions générales de vente</p>

             </div>

    );
  };
};




const mapStateToProps = (state) => {
  return (
    {
      story: state.cakeCharacteristics.story,
      price: state.cakeCharacteristics.price,
      customization: state.cakeCharacteristics.customization,
      ingredients: state.cakeCharacteristics.ingredients,
      quantity: state.cakeCharacteristics.quantity,
      occasion: state.cakeCharacteristics.occasion,
      size: state.cakeCharacteristics.size,
      type: state.cakeCharacteristics.type,
      cake: state.cakeCharacteristics,
      index: state.pageIndex,
    }
  )
}
export default connect(mapStateToProps)(Confirmation);

