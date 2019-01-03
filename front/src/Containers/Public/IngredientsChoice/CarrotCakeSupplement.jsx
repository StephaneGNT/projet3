import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input } from 'reactstrap';
import PropTypes from 'prop-types';
import changeCakeBase from '../../../Actions/cakeActions/changeCakeLocalType';

class CarrotCakeSupplement extends Component {
  modifyCakeBase = (baseName, suggestion) => {
    const { updateType } = this.props;
    updateType(`${baseName} aux ${suggestion}`);
  }

  renderSupplement = (cake) => {
    const render = [];
    if (cake.type === 'cake' && cake.ingredients.length > 0) {
      if (cake.ingredients[0].name === 'Base carotte') {
        render.push(
          <p>Voulez-vous ajouter un ingrédient à la base de votre gâteau ?</p>,
          <Input type="select" name="select" onChange={e => this.modifyCakeBase(cake.ingredients[0].name, e.target.value)}>
            <option />
            <option>Noisettes</option>
            <option>Noix</option>
            <option>Amandes</option>
          </Input>,
        );
      }
    }
    return render;
  }

  render() {
    const { cake } = this.props;
    return (
      <div>
        {this.renderSupplement(cake)}
      </div>
    );
  }
}

CarrotCakeSupplement.propTypes = {
  cake: PropTypes.shape({}).isRequired,
  updateType: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cake: state.cakeCharacteristics,
});

const mapDispatchToProps = dispatch => ({
  updateType: type => dispatch(changeCakeBase(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CarrotCakeSupplement);
