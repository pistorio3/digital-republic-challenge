import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputQuantity extends Component {
  render() {
    const { text, numberWall, type } = this.props;

    return (
      <label htmlFor={ `doors${numberWall}` }>
        {text}
        <input
          id={ `${type}${numberWall}` }
          className="input-door-window"
          type="number"
          placeholder="0"
        />
      </label>

    );
  }
}

InputQuantity.propTypes = {
  text: PropTypes.string,
  numberWall: PropTypes.number,
  type: PropTypes.string,
}.isRequired;

export default InputQuantity;
