import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NavArrowsLayout from '../Navigation/NavArrowsLayout';
import { updateIndex } from '../../../Actions/cakeActions/changeIndex';

import '../../../Assets/Styles/IngredientsButtons.css';

class IngredientsButtons extends Component {
  renderButton = (index, cake) => {
    let render;
    const ingredientsType = cake.ingredients.map(ingredient => ingredient.type);
    if (index === 3 && ingredientsType.indexOf('Filling') >= 0) {
      render = (<Button className="order-btn"> Une garniture supplémentaire ? </Button>);
    }
    return render;
  };

  checkEnable = (event, disabled) => {
    const { cake, setPageIndex } = this.props;
    const newIndex = (cake.type === 'cake' || cake.type === 'cheesecake') ? 5 : 3;
    if (disabled) event.preventDefault();
    else setPageIndex(newIndex);
  };

  render() {
    const { index, cake } = this.props;
    const disabled = !cake.ingredients.length > 0;
    return (
      <Row>
        <Button className="order-btn" disabled={disabled}>
          <Link className="commandLink" onClick={e => this.checkEnable(e, disabled)} to="/mycake/customCake">
            Commander
          </Link>
        </Button>
        {this.renderButton(index, cake)}
        <NavArrowsLayout />
      </Row>
    );
  }
}

IngredientsButtons.propTypes = {
  index: PropTypes.number.isRequired,
  cake: PropTypes.shape({}).isRequired,
  setPageIndex: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cake: state.cakeCharacteristics,
});

const mapDispatchToProps = dispatch => ({
  setPageIndex: index => dispatch(updateIndex(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsButtons);
