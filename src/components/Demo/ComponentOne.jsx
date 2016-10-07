import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

export class ComponentOne extends Component {
  render() {
    return (
      <div>
        ComponentOne
      </div>
    );
  };
};

export const mapStateToProps = (state) => ({

});

export const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ComponentOne);
