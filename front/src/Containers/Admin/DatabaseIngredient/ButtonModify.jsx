import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { toggleFormModify } from '../../../Actions/databaseActions/toggleFormNew';
import setCategory from '../../../Actions/databaseActions/setCategory';

class ButtonModify extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { toggleForm, changeCategory } = this.props;
    return(
      <Button title="Modifier ingrédient" onClick={() => toggleForm(true) && changeCategory(this.props.ingredient)}>Modifier</Button>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  toggleForm: display => dispatch(toggleFormModify(display)),
  changeCategory: category => dispatch(setCategory(category)),
});

export default connect(null, mapDispatchToProps)(ButtonModify);