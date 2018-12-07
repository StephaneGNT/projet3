import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

const ColorPicker = (props) => {
//   const {  } = props;
//   return (
//     <Row>
//       <Col xs="12" lg="6" >
//         <p>Couleur de fond</p>
//         <GithubPicker name="backgroundColor" onChange={changeBgColor} />
//       </Col>
//       <Col xs="12" lg="6">
//         <p>Couleur de l'écriture</p>
//         <GithubPicker name="fontColor" onChange={changeFontColor} />
//       </Col>
//     </Row>
//   );
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  // changeBgColor: color => dispatch(changeBgColor(color)),
});


export default connect(null, mapDispatchToProps)(ColorPicker);