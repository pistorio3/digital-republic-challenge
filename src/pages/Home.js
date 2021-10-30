import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import Wall from '../components/Wall';

import {
  getInputValues,
  validateWidth,
  validateHeight,
  validateHeightWithDoor,
  widthErrorMessage,
  heightErrorMessage,
  heightDoorErrorMessage,
} from '../utils/functions';

class home extends Component {
  validateData = () => {
    const NUMBER_WALLS = 4;
    const values = getInputValues(NUMBER_WALLS);

    const widthsValid = validateWidth(values);
    const heightsValid = validateHeight(values);
    const heightsWithDoorValid = validateHeightWithDoor(values);

    widthErrorMessage(widthsValid);
    heightErrorMessage(heightsValid);
    heightDoorErrorMessage(heightsWithDoorValid);
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
              <div key={ `div${index}` } className="input-measure">
                <Wall numberWall={ index } />
              </div>
            ))}

            <div><p id="errorwidth" className="error-message" /></div>
            <div><p id="errorheight" className="error-message" /></div>
            <div><p id="errorheightdoor" className="error-message" /></div>

            {/* <Link to="/result"> */}
            <button
              type="button"
              className="calc-button"
              onClick={ this.validateData }
            >
              Calcular
            </button>
            {/* </Link> */}

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

export default home;
