import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Title from './Title';
import InputMeasure from './InputMeasure';
import CheckBox from './CheckBox';
import InputQuantity from './InputQuantity';

class Wall extends Component {
  componentDidMount() {
    const { numberWall } = this.props;

    document.getElementById(`doors${numberWall}`).disabled = true;
    document.getElementById(`windows${numberWall}`).disabled = true;
  }

  render() {
    const { numberWall } = this.props;

    return (
      <>
        <Title numberWall={ numberWall } />
        <InputMeasure text="Largura" type="width" numberWall={ numberWall } />
        <InputMeasure text="Altura" type="height" numberWall={ numberWall } />
        <CheckBox numberWall={ numberWall } />
        <InputQuantity text="Portas" type="doors" numberWall={ numberWall } />
        <InputQuantity text="Janelas" type="windows" numberWall={ numberWall } />
      </>
    );
  }
}

Wall.propTypes = {
  numberWall: PropTypes.string,
}.isRequired;

export default Wall;
