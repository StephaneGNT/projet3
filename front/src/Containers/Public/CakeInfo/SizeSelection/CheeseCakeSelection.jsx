import React from 'react';
import {
  Row, Container, Label, Col,
} from 'reactstrap';
import Cheesecake from '../../../../Assets/Images/cheesecake.png';
import '../../../../Assets/Styles/CheeseCakeSelection.css';


const CheeseCakeSelection = () => (
  <Container style={{ minWidth: '100%' }} className="text-center">
    <Label className="labels-perso mt-3" />
    <Row className="cheesecakeSelection">
      <Col className="sm-4"><img src={Cheesecake} alt="cheese" /></Col>
    </Row>
  </Container>
);


export default CheeseCakeSelection;
