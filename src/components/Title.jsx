import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const { numberWall } = this.props;

    return (
      <div>
        <h5>
          Parede
          {' '}
          {numberWall}
        </h5>
      </div>
    );
  }
}

Title.propTypes = {
  numberWall: PropTypes.number,
}.isRequired;

export default Title;
