import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { toggleFormModify } from '../../../Actions/databaseActions/toggleFormNew';
import { modsetCategory, setIndex } from '../../../Actions/databaseActions/setCategory';


class ButtonModify extends Component {

  render() {
    const { toggleForm, changeCategory, changeIndex } = this.props;
    return(
      <Button title="Modifier ingrédient" onClick={() => toggleForm(true) && changeCategory(this.props.ingredient.type) && changeIndex(this.props.ingredient.id)}>Modifier</Button>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  toggleForm: show => dispatch(toggleFormModify(show)),
  changeCategory: category => dispatch(modsetCategory(category)),
  changeIndex: index => dispatch(setIndex(index)),
});

export default connect(null, mapDispatchToProps)(ButtonModify);
