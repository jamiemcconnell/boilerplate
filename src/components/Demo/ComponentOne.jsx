import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Loading from 'components/Loading/Loading';

import { fetch, ListActions } from 'actions/ListActions';

export class ComponentOne extends Component {
  componentWillMount() {
    // Get items.
    //
    this.props.fetch();
  }

  render() {
    return (
      <div>
        ToDo List
        <Loading/>
        <ul>
          {
            this.props.list.toArray().map((item, index) => {
              return (<li key={index}>{item}</li>)
            })
          }
        </ul>
      </div>
    );
  };
};

export const mapStateToProps = (state) => {
  return { list: state.list };
};

export const mapDispatchToProps = (dispatch) => ({
  fetch: bindActionCreators(fetch, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ComponentOne);
