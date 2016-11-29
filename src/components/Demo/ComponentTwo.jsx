import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loading } from '../Loading/LoadingActions';

export class ComponentTwo extends Component {



  render() {
    return (
      <div>
        New Item
        <input type="text" />
        <button onClick={ this.props.loading.bind(this, true) }>Add</button>
      </div>
    );
  };

};

export const mapStateToProps = (state) => ({

});

export const mapDispatchToProps = (dispatch) => ({
  loading: bindActionCreators(loading, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ComponentTwo);
