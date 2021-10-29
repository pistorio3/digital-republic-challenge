import React, { Component } from 'react';

import Wall from '../components/Wall';

export default class home extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <h1>Digital Republic Challenge</h1>
          <h2>Paint Calculator</h2>

          <div className="container-inputs">
            <div className="input-measure">
              <Wall numberWall={ 1 } />
            </div>

            <div className="input-measure">
              <Wall numberWall={ 2 } />
            </div>

            <div className="input-measure">
              <Wall numberWall={ 3 } />
            </div>

            <div className="input-measure">
              <Wall numberWall={ 4 } />
            </div>

            <button type="button">Calcular</button>

            <h3>Observação: todas as medidas devem ser fornecidas em metros</h3>
          </div>
        </div>
      </div>
    );
  }
}
