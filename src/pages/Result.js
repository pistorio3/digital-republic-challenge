import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import ResultContext from '../context/ResultContext';

export default function Result() {
  const { cans, paintArea, litersOfInk } = useContext(ResultContext);
  console.log(cans);
  console.log(paintArea);

  return (
    <div className="container-result">
      <h1>Result Page</h1>

      <div className="result">
        <h2>
          Área para pintura:
          {' '}
          {paintArea}
          {' '}
          m²
        </h2>
        <h2>
          Tinta necessária:
          {' '}
          {litersOfInk}
          {' '}
          L
        </h2>

        <h2>
          Latas de 18L -
          {' '}
          {cans.can180}
        </h2>
        <h2>
          Latas de 3,6L -
          {' '}
          {cans.can36}
        </h2>
        <h2>
          Latas de 2,5L -
          {' '}
          {cans.can25}
        </h2>
        <h2>
          Latas de 0,5L -
          {' '}
          {cans.can05}
        </h2>
        <Link to="/">
          <button type="button" className="back-button">VOLTAR</button>
        </Link>

      </div>

    </div>
  );
}
