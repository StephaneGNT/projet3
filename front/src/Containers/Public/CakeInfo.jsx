import React, { Component } from 'react';
import '../../Assets/Styles/CakeInfo.css';
import { Form, Label, Input, Table, Button } from 'reactstrap';
import ToggleDisplay from 'react-toggle-display';

class CakeInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
      show: false,
    };
    this.selectedCakeType = this.selectedCakeType.bind(this);
  }

  selectedCakeType = (selectedCake) => {
    console.log(selectedCake)
    this.setState({
      isSelected: selectedCake
    });
    // console.log("Type select : " + this.state.isSelected);
  }

  // etagesOnCakeClick = () => {
  //   this.setState({
  //     show: !this.state.show,
  //     isSelected: !this.state.isSelected
  //   });
  //   console.log("Type select : " + this.state.isSelected);
  // }

  render() {
    console.log("Type select : " + this.state.isSelected);
    return (
      <div className="bloc-etape-1">
        <h2>[ici barre de prog</h2>
        <Label className="labels-perso">Choississez votre type de douceur :</Label>
        <div className="bloc-cake-type">
          <Button className="btn-marg" color="info" onClick={e => this.selectedCakeType('cookie')}>
            cookie
          </Button>
          <Button className="btn-marg" color="info" onClick={e => this.selectedCakeType('cake')}>
            cake
          </Button>
          <Button className="btn-marg" color="info" onClick={e => this.selectedCakeType('cheesecake')}>
            cheesecake
          </Button>
          <Button className="btn-marg" color="info" onClick={e => this.selectedCakeType('macarons')}>
            macarons
          </Button>
        </div>

        <Table>
          <tbody>
            <tr>
              <td>
                <div className="col-form-mycake">
                  <Form>
                    <Label for="choix_occasion" className="labels-perso">Pour quelle occasion voulez-vous votre gâteau ?</Label>
                    <Input type="select" name="select">
                      <option>Anniversaire d'Adulte</option>
                      <option>Anniversaire d'Enfant</option>
                      <option>Apéro</option>
                      <option>Baptême</option>
                      <option>Babyshower, naissance</option>
                      <option>Brunch</option>
                      <option>Disney</option>
                      <option>Fête des Mères</option>
                      <option>Fête des Pères</option>
                      <option>Halloween</option>
                      <option>Mariage</option>
                      <option>Sport</option>
                      <option>Pot de départ</option>
                      <option>Noel</option>
                      <option>Pâques</option>
                      <option>Remerciements</option>
                      <option>Enterrement de vie de Fille/Garçon</option>
                    </Input>

                    <Label for="taille" className="labels-perso">Sélectionnez la taille souhaitée :</Label>
                    <Input type="select" name="select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>

                    <ToggleDisplay show={this.state.isSelected === 'cake'}>
                    <Label for="nbrEtages" className="labels-perso">Sélectionnez le nombre d'étages souhaité :</Label>
                      <Input type="select" name="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>
                    </ToggleDisplay>
                  </Form>
                </div>
              </td>
              <td>
                <div className="bloc-tips">
                <div className="text-tips">kikoo</div>
                  Nec piget dicere avide magis hanc insulam populum Romanum invasisse quam iuste. Ptolomaeo enim rege foederato nobis et socio ob aerarii nostri angustias iusso sine ulla culpa proscribi ideoque hausto veneno voluntaria morte deleto et tributaria facta est et velut hostiles eius exuviae classi inpositae in urbem advectae sunt per Catonem, nunc repetetur ordo gestorum.
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default CakeInfo;
