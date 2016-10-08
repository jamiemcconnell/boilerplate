import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class ComponentTwo extends Component {
  render() {
    return (
      <div>
        ComponentTwo
      </div>
    );
  };
};

export const mapStateToProps = (state) => ({

});

export const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ComponentTwo);
