import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Row } from 'reactstrap';
import axios from 'axios';
import removeIngredient from '../../../Actions/cakeActions/removeIngredient';
import '../../../Assets/Styles/CakeInProgress.css';

class CakeInProgress extends Component {
  constructor(props) {
    super(props);
    this.state = { photos: [] };
  }

  // componentWillMount() {
  //   console.log("mount?")
  //   const { cake } = this.props;
  //   const photoArray = [];
  //   cake.ingredients.map(i => axios.get(`/api/image/get/${i.image}`)
  //     .then((response) => {
  //       console.log(response)
  //       photoArray.push(`data:image/jpg;base64,${response.data}`);
  //     }));
  //   this.setState({ photos: photoArray });
  // }

  compareIndexToLength = (item, index, arr) => {
    const { remove } = this.props;
    const { photos } = this.state;
    async function photo(i) {
      const promise = await axios.get(`/api/image/get/${i}`);
      return `data:image/jpg;base64,${await promise.data}`;
    }
    let photography = photo(item.image)
    console.log("photography", Promise.resolve(photography))

    if (index + 1 === arr.length) {
      const cakeLayoutType = () => {
        switch (item.type) {
          case 'Garniture': return 'fillingLayout';
          case 'Toppings': return 'toppingsLayout';
          case 'Glaçage': return 'icingsLayout';
          default: return null;
        }
      };
      return (
        <Row key={item.name} className="cakeProgressLayout">
          <p>
            <img src={photo(item.image).then(data => data).catch(reason => console.log(reason.message))} alt="ingredient1" className={cakeLayoutType()} />
          </p>
          <Button size="sm" close onClick={() => remove(item)} />
        </Row>
      );
    }
    return (
      <Row className="cakeProgressLayout">
        <p><img src={photo(item.image)} alt="ingredient2" /></p>
      </Row>
    );
  }

  displayNamesIngredients = item => (
    <Row key={item.name}>
      <p>
        {item.type}
        :
      </p>
      <p>{item.name}</p>
    </Row>
  );

  render() {
    const { cake } = this.props;
    console.log("photos", this.state.photos)
    return (
      <div>
        <Row className="cakeLayout">
          {cake.ingredients.map((item, index, arr) => this.compareIndexToLength(item, index, arr))}
        </Row>
        <Row className="namesLayout">
          {cake.ingredients.map(item => this.displayNamesIngredients(item))}
        </Row>
      </div>
    );
  }
}

CakeInProgress.propTypes = {
  cake: PropTypes.shape({}).isRequired,
  remove: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cake: state.cakeCharacteristics,
});

const mapDispatchToProps = dispatch => ({
  remove: item => dispatch(removeIngredient(item)),
});


export default connect(mapStateToProps, mapDispatchToProps)(CakeInProgress);
