import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Bienvenue sur Pimp My Cake !</h1>
        <Link to="/mycake"><button type="button">Commencez votre gâteau</button></Link>
      </div>
    );
  }
}

export default HomePage;
