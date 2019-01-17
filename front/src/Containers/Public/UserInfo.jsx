import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {
  Container, Row, Col, FormGroup, Label, Input, FormFeedback,
} from 'reactstrap';
import Progressbar from './Progressbar';


class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      telephone: '',
      birthdate: '',
      comment: '',
      giftcard: '',
    };
  }

  updateState = (e) => {
    switch (e.target.id) {
      case 'firstname':
        this.setState({ firstname: e.target.value });
        break;
      case 'lastname':
        this.setState({ lastname: e.target.value });
        break;
      case 'email':
        this.setState({ email: e.target.value });
        break;
      case 'telephone':
        this.setState({ telephone: e.target.value });
        break;
      case 'birthdate':
        this.setState({ birthdate: e.target.value });
        break;
      default:
        return null;
    }
    return null;
  }

  validEmail = (mailState) => {
    const mailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (mailState === '') return false;
    return !mailRegex.test(mailState);
  }

  activateButton = () => {
    const {
      email, firstname, lastname, telephone,
    } = this.state;
    if (firstname.length > 1
      && lastname.length > 1
      && telephone.length >= 10
      && this.validEmail(email) === false) return false;
    return true;
  }

  
          sendConfirmationEmails = () => {
            console.log("in function")
            const mail = {
              "client": {
                "email": "mathieuwcs@gmail.com",
                "title": "bonjour client",
                "content":`Bonjour ${this.state.firstname} ${this.state.lastname}, votre commande a bien été prise en compte.
                Nous reviendrons vers vous rapidement pour vous confirmer sa validation.`
               
//           renderConfirmation = () => {
//             let description = '';
//             const {
//               type, size, occasion, quantity, ingredients, customMessage, decoration, story, deliveryDate,
//             } = this.props;
//             if (type === 'brownie' || type === 'cookie') {
//               return (
//                 <p>
//                   Occasion:
//                   {' '}
//                   {occasion}
//                   <br />
//               Votre commande:
//                   {' '}
//                   {quantity}
//                   {' '}
//                   {type}
//                   {' '}
//                   de taille
//                   {' '}
//                   {size}
//                   <br />
//                   <br />
//                   Personnalisation:
//                   <br />
//                   {decoration}
//                   {' '}
//                   {' '}
//                   {customMessage}
//                   {' '}
//                   <br />
//                   <br />
//               Composition:
//                   {' '}
//                   {(ingredients.map(item => <div>{item.name}</div>))}
//                   {' '}
//                   <br />
//                   Date de retrait :
//                   {' '}
//                   {' '}
//                   {!deliveryDate ? 'non choisie' : moment(deliveryDate).format('Do MMMM YYYY')}
//                 </p>
//               );
//             }
//             if (type === 'cheesecake' || type === 'cake') {
//               return (
//                 <p>
//                 Occasion :
//                   {' '}
//                   {occasion}
//                   {' '}
//                   <br />
//                 Votre commande :
//                   {' '}
//                   {type}
//                   {' '}
//                   <br />
//                   <br />
//                 Personnalisation:
//                   <br />
//                   {decoration}
//                   {' '}
//                   {' '}
//                   {customMessage}
//                   {' '}
//                   <br />
//                   <br />
//                 Composition:
//                   {(ingredients.map(item => <div>{item.name}</div>))}
//                   <br />
//                   <br />
//                   Date de retrait :
//                   {' '}
//                   {' '}
//                   {!deliveryDate ? 'non choisie' : moment(deliveryDate).format('Do MMMM YYYY')}
//                 </p>
//               );
//             }
//             if (type === 'macaron') {
//               return (
//                 <p>
//                  Occasion:
//                   {' '}
//                   {occasion}
//                   <br />
//               Votre commande:
//                   {' '}
//                   {quantity}
//                   {' '}
//                   {type}
//                   {' '}
//                 de taille
//                   {' '}
//                   {size}
//                   {' '}
//                   <br />
//                   <br />
//                   Personnalisation:
//                   <br />
//                   {decoration}
//                   {' '}
//                   {' '}
//                   {customMessage}
//                   {' '}
//                   <br />
//                   <br />
//                   Parfum de vos macarons:
//                   <br />
//                   {' '}
//                   {(ingredients.map(item => item.name.includes('Parfum') && <div>{item.name}</div>))}
//                   <br />
//                   Couleur de vos macarons:
//                   {(ingredients.map(item => !item.name.includes('Parfum') && <div>{item.name}</div>))}
//                   Date de retrait :
//                   {' '}
//                   {' '}
//                   {!deliveryDate ? 'non choisie' : moment(deliveryDate).format('Do MMMM YYYY')}
//                   <br />
//                 </p>
//               );
//             }
//           }
//           Confirmation.propTypes = {
//             type: PropTypes.string.isRequired,
//             size: PropTypes.string.isRequired,
//             occasion: PropTypes.string.isRequired,
//             ingredients: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
//             quantity: PropTypes.number.isRequired,
//             price: PropTypes.number.isRequired,
//             customMessage: PropTypes.string.isRequired,
//             decoration: PropTypes.string.isRequired,
//             story: PropTypes.number.isRequired,
//             deliveryDate: PropTypes.string.isRequired,
          
//           };
          
//           const mapStateToProps = (state) => {
//             return (
//               {
//                 deliveryDate: state.orderCharacteristics.delivery_date,
//                 story: state.cakeCharacteristics.story,
//                 price: state.cakeCharacteristics.price,
//                 customMessage: state.customizationCustomer.customMessage.choice,
//                 decoration: state.customizationCustomer.decoration.choice,
//                 ingredients: state.cakeCharacteristics.ingredients,
//                 quantity: state.cakeCharacteristics.quantity,
//                 occasion: state.cakeCharacteristics.occasion,
//                 size: state.cakeCharacteristics.size,
//                 type: state.cakeCharacteristics.type,
//                 cake: state.cakeCharacteristics,
//                 index: state.pageIndex,
//               }
//             );
//           };
//           export default connect(mapStateToProps)(Confirmation);

        

        
        
      },
      "giluna": {
        "email": "mathieumiquel@gmail.com",
        "title": "Bonjour giluna",
        "content":"une nouvelle commande vient d'être générée sur le site"
      },
    }
    axios.post('/api/send/mail', mail).then(response => console.log(response.data))
  }

  render() {
    const {
      firstname, lastname, birthdate, telephone, email, comment, giftcard,
    } = this.state;
    
    return (
      <Container>
        <Row className="text-center">
          <Progressbar />
        </Row>
        <Row className="justify-content-around" style={{ paddingTop: '15vh' }}>
          <Col sm="10" md="4">
            <FormGroup>
              <Label for="firstname">
                <span className="text-danger">* </span>
                Prénom
              </Label>
              <Input type="text" name="firstname" id="firstname" placeholder="votre prénom" value={firstname} onChange={e => this.updateState(e)} />
            </FormGroup>
          </Col>
          <Col sm="10" md="4">
            <FormGroup>
              <Label for="lastname">
                <span className="text-danger">* </span>
                Nom
              </Label>
              <Input type="text" name="lastname" id="lastname" placeholder="votre nom de famille" value={lastname} onChange={e => this.updateState(e)} />
            </FormGroup>
          </Col>
          <Col sm="10" md="3">
            <FormGroup>
              <Label for="birthdate">
                Date de naissance
              </Label>
              <Input type="text" name="birthdate" id="birthdate" placeholder="votre date de naissance" value={birthdate} onChange={e => this.updateState(e)} />
            </FormGroup>
          </Col>
        </Row>
        <Row className="justify-content-around">
          <Col sm="10" md="6">
            <FormGroup>
              <Label for="email">
                <span className="text-danger">* </span>
                E-mail
              </Label>
              <Input invalid={this.validEmail(email)} type="email" name="email" id="email" placeholder="votre adresse mail" value={email} onChange={e => this.updateState(e)} />
              <FormFeedback>adresse mail non valide</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label>
                Commentaire à Giluna
              </Label>
              <Input type="textarea" id="comment" value={comment} onChange={e => this.updateState(e)} />
            </FormGroup>
          </Col>
          <Col sm="10" md="5">
            <FormGroup>
              <Label for="telephone">
                <span className="text-danger">* </span>
                Téléphone
              </Label>
              <Input type="text" name="telephone" id="telephone" placeholder="votre numéro de téléphone" value={telephone} onChange={e => this.updateState(e)} />
            </FormGroup>
            <FormGroup>
              <Label>
                Ajoutez une carte à votre Commande
              </Label>
              <Input type="textarea" id="giftcard" value={giftcard} onChange={e => this.updateState(e)} />
            </FormGroup>
          </Col>
        </Row>
        <Row className="back-btn-userinfo">
          <button type="button" onClick={() => this.sendConfirmationEmails()} className="btn-confirmation" >envoyer la Commande</button>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({ cake: state.cakeCharacteristics });

export default connect(mapStateToProps)(UserInfo);

// disabled={this.activateButton()}