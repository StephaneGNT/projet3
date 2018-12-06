import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import removeIngredient from '../../Actions/cakeActions/removeIngredient';
import '../../Assets/Styles/CakeInProgress.css';

class CakeInProgress extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { cake, removeIngredient } = this.props;
    return (
      <div className="cakeLayout">
        <p>
          {cake.ingredients.map((item) => {
            return (<div>
              <img src={item.img} alt="ingredient" />
              <Button onClick={() => removeIngredient(item.id)}>remove</Button>
              <p>{item.name}</p>
            </div>
            );
          })}
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cake: state.cakeCharacteristics,
});

const mapDispatchToProps = dispatch => ({
  removeIngredient: item => dispatch(removeIngredient(item)),
});


export default connect(mapStateToProps, mapDispatchToProps)(CakeInProgress);
