import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckBox extends Component {
  enableInputs = () => {
    const { numberWall } = this.props;

    const { checked } = document.getElementById(`check${numberWall}`);

    if (checked) {
      document.getElementById(`doors${numberWall}`).disabled = false;
      document.getElementById(`windows${numberWall}`).disabled = false;
    } else {
      document.getElementById(`doors${numberWall}`).disabled = true;
      document.getElementById(`windows${numberWall}`).disabled = true;
    }
  }

  render() {
    const { numberWall } = this.props;
    return (
      <label htmlFor={ `check${numberWall}` }>
        Possui janelas ou portas?
        <input
          type="checkbox"
          id={ `check${numberWall}` }
          name={ `check${numberWall}` }
          onChange={ this.enableInputs }
        />
      </label>
    );
  }
}

CheckBox.propTypes = {
  numberWall: PropTypes.number,
}.isRequired;

export default CheckBox;
