import React, { Component } from 'react';
import { Row } from 'reactstrap';
import { connect } from 'react-redux';
import NavArrowsLayout from './Navigation/NavArrowsLayout';
import Progressbar from './Progressbar';
import '../../Assets/Styles/OrderDetail.css';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';


class Confirmation extends Component {
    constructor(props) {
      super (props);
      this.state = {}; 
    }

  render() {

    
    return (
        
        <div>
       
        <Card>
          <CardImg top width="100%" />
          <CardBody>
          
             <CardTitle>CAKE</CardTitle>
            <CardSubtitle>CAKE</CardSubtitle> 
            <CardText>  Vous avez commandé un {this.props.cake.type} pour {this.props.cake.size} personnes </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    );
  };
    };
 


    const mapStateToProps = (state) => {
    return (
      {
        cake: state.cakeCharacteristics,
        price: state.price,
        index: state.pageIndex,
      }
    )
    }
    export default connect(mapStateToProps)(Confirmation);
      
