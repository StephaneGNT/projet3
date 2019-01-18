import React, { Component } from 'react';
import PropTypes, { checkPropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { changeIndex } from '../../../Actions/cakeActions/changeIndex';

class NavArrowNext extends Component {
  translateIndexToRoute = (index, cakeType) => {
    const routes = [`${process.env.PUBLIC_URL}/mycake`, `${process.env.PUBLIC_URL}/mycake/composition`, `${process.env.PUBLIC_URL}/mycake/customCake`, `${process.env.PUBLIC_URL}/mycake/orderDetail`, `${process.env.PUBLIC_URL}/mycake/userInfo`];
    if (cakeType === 'cookie' || cakeType === 'macaron' || cakeType === 'brownie') {
      return routes[index];
    }
    switch (index) {
      case 1: return routes[1];
      case 4: return routes[2];
      case 5: return routes[3];
      case 6: return routes[4];
      default: return routes[1];
    }
  }

  getTitle = () => {
    const { cake, pageIndex } = this.props;
    if (pageIndex === 1) {
      if (cake.type === '') return 'Choisissez votre gâteau';
      if (cake.type === 'cake') return 'Choisissez la taille de votre gâteau';
      if (cake.type === 'cookie' || cake.type === 'macaron' || cake.type === 'brownie') {
        return 'Choisissez la taille et le nombre de vos douceurs';
      }
      // return '';
    }
  }

  handleClick = (e) => {
    const { pageIndex, deliveryDate, cake, changePageIndex } = this.props;
    if (!deliveryDate && ((pageIndex === 6) || (pageIndex === 4 && !['cake', 'cheesecake'].includes(cake.type)))) {
      e.preventDefault();
      window.alert('Veuillez renseigner une date de retrait')
    }
    else changePageIndex(1);
  }

  render() {
    const {
      pageIndex,
      type,
      disabled,
      changePageIndex,
    } = this.props;

    return (
      <div>
        <NavLink to={this.translateIndexToRoute(pageIndex, type)}>
          <button title={this.getTitle()} disabled={disabled} type="button" onClick={e => this.handleClick(e)} className="btn-prev-next">
            Suivant
            {/* {this.pageIndex} */}
          </button>
        </NavLink>
      </div>
    );
  }
}

NavArrowNext.propTypes = {
  pageIndex: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  changePageIndex: PropTypes.func.isRequired,
  cake: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  dispatch: state.dispatch,
  pageIndex: state.pageIndex,
  type: state.cakeCharacteristics.type,
  cake: state.cakeCharacteristics,
  deliveryDate: state.orderCharacteristics.delivery_date,
});

const matchDispatchToProps = dispatch => ({ changePageIndex: num => dispatch(changeIndex(num)) });


export default connect(mapStateToProps, matchDispatchToProps)(NavArrowNext);