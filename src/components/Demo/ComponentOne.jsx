import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Loading from '../../components/Loading/Loading';

export class ComponentOne extends Component {
  render() {
    return (
      <div>
        ComponentOne

        <Loading/>
      </div>
    );
  };
};

export const mapStateToProps = (state) => ({

});

export const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ComponentOne);
