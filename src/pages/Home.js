import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Wall from '../components/Wall';

import ResultContext from '../context/ResultContext';

import {
  getInputValues,
  validateWidth,
  validateHeight,
  validateHeightWithDoor,
  validateArea,
  wallsArea,
  calculateLitersOfInk,
  calculateCans,
} from '../utils/functions';

class Home extends Component {
  validateData = () => {
    let validMeasures = false;
    const NUMBER_WALLS = 4;
    const checks = []; const quantityValues = []; const doors = [];

    const values = getInputValues(NUMBER_WALLS);
    const widthsValid = validateWidth(values);
    const heightsValid = validateHeight(values);
    const heightsWithDoorValid = validateHeightWithDoor(values);

    widthErrorMessage(widthsValid);
    heightErrorMessage(heightsValid);
    heightDoorErrorMessage(heightsWithDoorValid);

    for (let index = 0; index < NUMBER_WALLS; index += 1) {
      checks.push(document.getElementById(`check${index + 1}`).checked);
      doors.push(document.getElementById(`doors${index + 1}`).value);
      quantityValues.push(document.getElementById(`doors${index + 1}`).value);
      quantityValues.push(document.getElementById(`windows${index + 1}`).value);
    }

    const isChecked = checks.some((status) => status === true);
    const defaultQuantityValues = quantityValues.every((value) => value === '');
    const noDoors = doors.every((value) => value === '');

    noDoorErrorMessage(noDoors);

    if (isChecked && defaultQuantityValues) {
      emptyInputsErroMessage(isChecked, defaultQuantityValues);
    } else {
      emptyInputsErroMessage(isChecked, defaultQuantityValues);
    }

    if (widthsValid && heightsValid && heightsWithDoorValid && !noDoors) {
      const areaValid = validateArea(values);
      areaErrorMessage(areaValid);
      validMeasures = areaValid;
    }

    if (validMeasures) {
      const paintArea = wallsArea();
      const liters = calculateLitersOfInk(paintArea);
      const cans = calculateCans(liters);

      this.sendResult(cans, paintArea, liters);
    }
  };

  async sendResult(cans, paintArea, liters) {
    const { setCans, setPaintArea, setLitersOfInk } = this.context;
    const { history } = this.props;

    await setCans(cans);
    await setPaintArea(paintArea);
    await setLitersOfInk(liters);

    history.push({ pathname: '/result' });
  }

  render() {
    const order = { one: 1, two: 2, three: 3, four: 4 };
    const wallsOrder = [order.one, order.two, order.three, order.four];

    return (
      <div>
        <div className="App">
          <h1>Paint Calculator</h1>
          <div className="container-inputs">
            {wallsOrder.map((index) => (
              <div
                key={ `div${index}` }
                className="input-measure"
                data-testid={ `input-measure${index}` }
              >
                <Wall numberWall={ index } />
              </div>
            ))}

            <div><p id="errorwidth" className="error-message" /></div>
            <div><p id="errorheight" className="error-message" /></div>
            <div><p id="errorheightdoor" className="error-message" /></div>
            <div><p id="erroremptyinput" className="error-message" /></div>
            <div><p id="errorinvalidarea" className="error-message" /></div>
            <div><p id="errornodoors" className="error-message" /></div>

            <button
              type="button"
              className="calc-button"
              onClick={ this.validateData }
            >
              CALCULAR
            </button>

            <h3>
              Observação: todas as medidas devem ser fornecidas
              em metros com duas casas decimais
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

Home.contextType = ResultContext;

Home.defaultProps = {
  history: PropTypes.func,
};

Home.propTypes = {
  history: PropTypes.func,
};

export default Home;
