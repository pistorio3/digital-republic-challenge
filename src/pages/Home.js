import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import Wall from '../components/Wall';

import {
  getInputValues,
  validateWidth,
  validateHeight,
  validateHeightWithDoor } from '../utils/functions';

class home extends Component {
  widthErrorMessage = (widthsValid) => {
    if (!widthsValid) {
      const paragraph = document.getElementById('errorwidth');
      paragraph.innerHTML = 'A largura da parede deve ter entre 1m - 15m';
    } else {
      const paragraph = document.getElementById('errorwidth');
      paragraph.innerHTML = '';
    }
  }

  heightErrorMessage = (heightsValid) => {
    if (!heightsValid) {
      const paragraph = document.getElementById('errorheight');
      const message = 'Altura da parede sem porta deve ter entre 1m - 15m';
      paragraph.innerHTML = message;
    } else {
      const paragraph = document.getElementById('errorheight');
      paragraph.innerHTML = '';
    }
  }

  heightDoorErrorMessage = (heightsWithDoorValid) => {
    if (!heightsWithDoorValid) {
      const paragraph = document.getElementById('errorheightdoor');
      const message = 'Paredes com porta devem ter altura mínima de 2.20m ';
      paragraph.innerHTML = message;
    } else {
      const paragraph = document.getElementById('errorheightdoor');
      paragraph.innerHTML = '';
    }
  }

  validateData = () => {
    const NUMBER_WALLS = 4;
    const values = getInputValues(NUMBER_WALLS);

    const widthsValid = validateWidth(values);
    const heightsValid = validateHeight(values);
    const heightsWithDoorValid = validateHeightWithDoor(values);

    this.widthErrorMessage(widthsValid);
    this.heightErrorMessage(heightsValid);
    this.heightDoorErrorMessage(heightsWithDoorValid);

    console.log('Valores Informados');
    console.log(values);

    console.log(widthsValid);
    console.log(heightsValid);
    console.log(heightsWithDoorValid);
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
