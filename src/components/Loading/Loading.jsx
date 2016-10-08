import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default class Loading extends Component {
  render() {
    let loadingStyle = 'loading';

    return (
      <div className={loadingStyle}>LOADING...</div>
    );
  };
};
