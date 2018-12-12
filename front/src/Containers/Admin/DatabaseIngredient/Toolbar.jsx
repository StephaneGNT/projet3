import React, { Component } from 'react'

class Toolbar extends Component {
  render () {
    return (
      <Row>
        <Col>
          <input> Chercher </input>
        </Col>
        <Col>
          <input> Filtrer </input>
        </Col>
        <Col>
          <Button> Nouveau </Button>
        </Col>
      </Row>
    )
  }
}

export default Toolbar