import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputMeasure extends Component {
  render() {
    const { text, numberWall, type } = this.props;

    return (
      <label htmlFor={ `wall-${type}${numberWall}` }>
        {text}
        <input
          data-testid={ `measure-${type}${numberWall}` }
          id={ `wall-${type}${numberWall}` }
          className="input-wall"
          type="number"
          placeholder="0.00"
        />
        m
      </label>
    );
  }
}

InputMeasure.propTypes = {
  text: PropTypes.string,
  numberWall: PropTypes.number,
  type: PropTypes.string,
}.isRequired;

export default InputMeasure;
