import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Loading from 'components/Loading/Loading';

import ListActions from 'actions/ListActions';

export class ComponentOne extends Component {
  componentWillMount() {
    // Get items.
    //
  }

  render() {
    return (
      <div>
        ToDo List
        <Loading/>
        <ul>
          { this.props.list.map((item, i) => {
              return <li key={i}>{ item }</li>
            })
          }
        </ul>
      </div>
    );
  };
};

export const mapStateToProps = (state) => {
  return { list: state.list.items };
};

export const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ComponentOne);
