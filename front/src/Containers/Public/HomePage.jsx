import React, { Component } from 'react';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div> 
        <h1>Bienvenue sur Pimp My Cake !</h1>
        <button>Commencez votre gâteau</button>
      </div>
    );
  }
}

export default HomePage;
