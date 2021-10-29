import React from 'react';
import './assets/css/App.css';
import Wall from './components/Wall';

function App() {
  return (
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
  );
}

export default App;
