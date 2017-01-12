'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';

import { loading } from 'actions/LoadingActions';
import { add } from 'actions/ListActions';

export class ComponentTwo extends Component {
  render() {
    const {handleSubmit, reset, add} = this.props;
    const doAdd = (data) => {
      add(data);
      reset();
    };

    return (
      <div className="list-newItem">
        <form name="newToDo" onSubmit={ handleSubmit(doAdd) }>
          <Field name="text" component="input" type="text" />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  };

};

const form = reduxForm({
  form: 'todoAdd',
  fields: ['text']
})

export const mapStateToProps = (state) => ({});

export const mapDispatchToProps = (dispatch) => ({
  loading: bindActionCreators(loading, dispatch),
  add: bindActionCreators(add, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(form(ComponentTwo));
