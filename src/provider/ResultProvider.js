import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ResultContext from '../context/ResultContext';

class ResultProvider extends Component {
  constructor(props) {
    super(props);

    this.setCans = this.setCans.bind(this);
    this.setPaintArea = this.setPaintArea.bind(this);
    this.setLitersOfInk = this.setLitersOfInk.bind(this);

    this.state = {
      cans: {
        can05: 0,
        can25: 0,
        can36: 0,
        can180: 0,
      },
      paintArea: 0,
      litersOfInk: 0,
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

  setLitersOfInk(litersOfInk) {
    this.setState({
      litersOfInk,
    });
  }

  render() {
    const contextValue = {
      ...this.state,
      setCans: this.setCans,
      setPaintArea: this.setPaintArea,
      setLitersOfInk: this.setLitersOfInk,
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
