import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import ResultContext from '../context/ResultContext';

export default function Result() {
  const { cans, paintArea, litersOfInk } = useContext(ResultContext);

  return (
    <div className="container-result">
      <h1>Paint Calculator</h1>
      <h2>Resultado</h2>

      <div className="result">
        <h3 className="cans">
          Área para pintura:
          {' '}
          {paintArea}
          {' '}
          m²
        </h3>
        <h3 className="cans">
          Tinta necessária:
          {' '}
          {litersOfInk}
          {' '}
          L
        </h3>

        <h3 className="cans">
          Latas de 18L -
          {' '}
          {cans.can180}
        </h3>
        <h3 className="cans">
          Latas de 3,6L -
          {' '}
          {cans.can36}
        </h3>
        <h3 className="cans">
          Latas de 2,5L -
          {' '}
          {cans.can25}
        </h3>
        <h3 className="cans">
          Latas de 0,5L -
          {' '}
          {cans.can05}
        </h3>
        <Link to="/">
          <button type="button" className="back-button">VOLTAR</button>
        </Link>

      </div>

    </div>
  );
}
