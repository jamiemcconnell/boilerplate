import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loading } from 'actions/LoadingActions';

export class Loading extends Component {
  render() {
    let loadingStyle = 'loading';

    if(!this.props.loading) {
      loadingStyle += ' loading--hidden';
    }

    return (
      <div className={loadingStyle}>LOADING...</div>
    );
  };
};

export const mapStateToProps = (state) => {
  return { loading: state.loading.toObject().isLoading };
};

export const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
