import React, { Component } from 'react';
import { Container, Table, Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';

class CakeDetail extends Component {

  renderCakeDescription = (cake) => {
    const render = [];
    let description = '';
    if (cake.type === 'cake') description = `1 ${cake.type} de ${cake.story} étage(s) pour ${cake.size} personnes`;
    else if (cake.type === 'cheesecake') description = `1 ${cake.type} pour ${cake.size} personnes`;
    else description = `${cake.quantity} ${cake.type} en taille ${cake.size}`;

    let decoration = '';
    if (cake.deco1 === '' && cake.deco2 === '') decoration = 'Aucune décoration';
    if (cake.deco1 === 'Message' || cake.deco2 === 'Message') {
      decoration = <div>Message : <span style={{ color: cake.msgColor, backgroundColor: cake.msgBgColor, fontFamily: cake.font }}>{cake.msgContent}</span></div>
    }
    if (cake.deco1 === '2D' || cake.deco1 === '3D') {
      decoration += <div>Décoration {cake.deco1}</div>;
    }
    if (cake.deco2 === '2D' || cake.deco2 === '3D') {
      decoration += <div>Décoration {cake.deco1}</div>;
    }

    render.push(
      <tr>
        <td>N°</td>
        <td>{cake.id}</td>
      </tr>,
      <tr>
        <td>Montant</td>
        <td>{cake.price}</td>
      </tr>,
      <tr>
        <td>Occasion</td>
        <td>{cake.occasion ? cake.occasion : 'Non précisée'}</td>
      </tr>,
      <tr>
        <td>Caractéristiques : </td>
        <td>{description}</td>
      </tr>,
      <tr>
        <td>Ingrédients : </td>
        <td>{cake.ingredients}</td>
      </tr>,
      <tr>
        <td>Décoration : </td>
        <td>{decoration}</td>
      </tr>,
    );
    return render;
  }

  render() {
    const { location, history } = this.props;
    console.log("location.state.cake", location.state.cake);
    return (
      <Container>
        <Table>
          <tbody>
            {this.renderCakeDescription(location.state.cake)}
          </tbody>
        </Table>
        <Button onClick={() => history.push('/admin/orders')}>Retour</Button>
      </Container>
    );
  }
}

export default withRouter(CakeDetail);
