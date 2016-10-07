import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

export class DemoContainer extends Component {
  render() {
    return (
      <div>
        <h1>DemoContainer</h1>
      </div>
    );
  };
};

export const mapStateToProps = (state) => ({

});

export const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(DemoContainer);
