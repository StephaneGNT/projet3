import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';

const BasesDB = (props) => {
  const { bases } = props;

  const mapBasesInTable = (allBases) => {
    allBases.map(base => (
      <tr>
        <td>{base.name}</td>
        <td>{base.size}</td>
        <td>{base.nb_persons}</td>
        <td>{base.price}</td>
        <td>{base.available}</td>
        <td>{base.info}</td>
        <td>{base.image}</td>
        <td>{base.allergies}</td>
        <td>{base.compatible}</td>
        <td>action buttons here</td>
      </tr>
    ));
  };

  return (
    <Table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Diametre</th>
          <th>Nombre Personnes</th>
          <th>Prix</th>
          <th>Disponible</th>
          <th>Info</th>
          <th>Image</th>
          <th>Allergenes</th>
          <th>Compatible</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        {mapBasesInTable(bases)}
      </tbody>
    </Table>
  );
};

BasesDB.propTypes = {
  bases: PropTypes.array.shapes.isRequired,
};

const mapStateToProps = state => ({
  bases: state.cakeBases,
});

export default connect(mapStateToProps)(BasesDB);
