import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Button } from 'reactstrap';


class BasesDB extends Component {
  createTableRows = allBases => (
    allBases.map((base, index) => (
      <tr key={index}>
        <td>{base.id}</td>
        <td>{base.name}</td>
        <td>{base.size}</td>
        <td>nb persons</td>
        <td>{base.price}</td>
        <td>{base.dispo}</td>
        <td>{base.info}</td>
        <td>{base.img}</td>
        <td>{base.allerg}</td>
        <td>{base.compatible}</td>
        <td>
          <Button>x</Button>
          <Button>/</Button>
        </td>
      </tr>
    ))
  );

  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>nom</th>
            <th>diametre</th>
            <th>nb persons</th>
            <th>prix</th>
            <th>Dispo</th>
            <th>info</th>
            <th>img</th>
            <th>allergenes</th>
            <th>compatible</th>
            <th>options</th>
          </tr>
        </thead>
        <tbody>
          {this.createTableRows(this.props.bases)}
        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = state => ({
  bases: state.cakeBases,
});

export default connect(mapStateToProps)(BasesDB);
