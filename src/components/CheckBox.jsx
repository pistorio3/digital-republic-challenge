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
      document.getElementById(`doors${numberWall}`).value = '';
      document.getElementById(`windows${numberWall}`).value = '';
    }
  }

  render() {
    const { numberWall } = this.props;
    return (
      <label htmlFor={ `check${numberWall}` }>
        Possui janelas ou portas?
        <input
          data-testid={ `check-input${numberWall}` }
          id={ `check${numberWall}` }
          name={ `check${numberWall}` }
          onChange={ this.enableInputs }
          type="checkbox"
        />
      </label>
    );
  }
}

CheckBox.propTypes = {
  numberWall: PropTypes.number,
}.isRequired;

export default CheckBox;
