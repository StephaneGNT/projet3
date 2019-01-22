import React from 'react';
import { Container, Table, Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import CakeDecoration from '../../CakeDecoration';

const CakeDetail = (props) => {
  const { location, history } = props;
  return (
    <Container>
      <Table>
        <tbody>
          {CakeDecoration(location.state.cake, 'admin')}
        </tbody>
      </Table>
      <Button onClick={() => history.push(`${process.env.PUBLIC_URL}/admin/orders`)}>Retour</Button>
    </Container>
  );
}

export default withRouter(CakeDetail);
