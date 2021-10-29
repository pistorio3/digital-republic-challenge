import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Wall extends Component {
  render() {
    const { numberWall } = this.props;

    return (
      <div>
        <h5>
          Parede
          {' '}
          {numberWall}
        </h5>
        <label htmlFor="wall-width">
          Largura
          <input
            id="wall-width"
            className="input-wall"
            type="number"
            placeholder="0.00"
          />
        </label>

        <label htmlFor="wall-height">
          Altura
          <input
            id="wall-height"
            className="input-wall"
            type="number"
            placeholder="0.00"
          />
        </label>

        <label htmlFor="doors">
          Portas
          <input
            id="doors"
            className="input-door-window"
            type="number"
            placeholder="0"
            value={ 0 }
          />
        </label>

        <label htmlFor="windows">
          Janelas
          <input
            id="windows"
            className="input-door-window"
            type="number"
            placeholder="0"
            value={ 0 }
          />
        </label>
      </div>
    );
  }
}

Wall.propTypes = {
  numberWall: PropTypes.string.isRequired,
};

export default Wall;
