import React, { useContext } from 'react';

import ResultContext from '../providers/ResultContext';

export default function Result() {
  const { cans, paintArea } = useContext(ResultContext);
  console.log(cans);
  console.log(paintArea);

  return (
    <div>
      <h1>Result Page</h1>
      <h2>
        Área para pintura:
        {' '}
        {paintArea}
        {' '}
        m²
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

    </div>
  );
}
