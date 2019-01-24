import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { toggleFormModify } from '../../../Actions/databaseActions/toggleFormNew';
import { modsetCategory, setIndex } from '../../../Actions/databaseActions/setCategory';


class ButtonModify extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { toggleForm, changeCategory, changeIndex } = this.props;
    return (
      <Button title="Modifier ingrédient" onClick={() => toggleForm(true) && changeCategory(this.props.ingredient.type) && changeIndex(this.props.ingredient.id)}>Modifier</Button>
    );
  }
}

ButtonModify.propTypes = {
  toggleForm: PropTypes.func.isRequired,
  changeCategory: PropTypes.func.isRequired,
  changeIndex: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  toggleForm: show => dispatch(toggleFormModify(show)),
  changeCategory: category => dispatch(modsetCategory(category)),
  changeIndex: index => dispatch(setIndex(index)),
});

export default connect(null, mapDispatchToProps)(ButtonModify);
