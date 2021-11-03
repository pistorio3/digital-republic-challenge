import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ResultContext from './ResultContext';

class ResultProvider extends Component {
  constructor(props) {
    super(props);

    this.setCans = this.setCans.bind(this);
    this.setPaintArea = this.setPaintArea.bind(this);

    this.state = {
      cans: {},
      paintArea: 0,
    };
  }

  setCans(cansObj) {
    this.setState({
      cans: cansObj,
    });
  }

  setPaintArea(paintArea) {
    this.setState({
      paintArea,
    });
  }

  render() {
    const contextValue = {
      ...this.state,
      setCans: this.setCans,
      setPaintArea: this.setPaintArea,
    };

    const { children } = this.props;

    return (
      <ResultContext.Provider value={ contextValue }>
        {children}
      </ResultContext.Provider>
    );
  }
}

ResultProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ResultProvider;
