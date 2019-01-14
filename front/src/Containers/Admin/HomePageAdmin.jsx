import React, { Component } from 'react';
import {
  Container, Row, Col,
} from 'reactstrap';
import logo from '../../Assets/Images/LOGO_GILUNA.png';

export default class HomePageAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div className="body-admin">
              <img src={logo} className="admin-home-logo" alt="giluna-logo" />
              <h1>Bienvenue sur votre panneau d'administration.</h1>
              <p className="para-admin">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie luctus nisi,
                eget egestas lectus vulputate eget. Morbi in quam quis odio venenatis mollis. Aliquam
                convallis dui nec quam pulvinar lobortis. Nullam aliquet porta lacinia. Vestibulum
                euismod neque vitae justo iaculis, ultricies eleifend sapien viverra. Duis facilisis,
                justo at cursus interdum, urna erat tincidunt lacus, vitae semper turpis eros a eros.
                Curabitur luctus non dui vel maximus. Vivamus gravida libero quis nisl ultrices, at aliquet
                odio lobortis. Ut sodales varius dolor, et cursus metus viverra quis. Quisque id erat at
                ipsum aliquet vehicula in ut justo. Donec a metus enim. Aliquam ac lacus mattis, ornare
                ligula in, luctus est. Morbi aliquam pharetra ex, eu viverra velit finibus eu.
        </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
