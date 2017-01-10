'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';

import { loading } from 'actions/LoadingActions';
import { add } from 'actions/ListActions';

export class ComponentTwo extends Component {
  doSubmit(data) {
    console.log('doSubmit');
    console.log(data);
    this.props.add(data);
  }

  render() {
    const {handleSubmit, add} = this.props;

    return (
      <div>
        New Item
        <form name="newToDo" onSubmit={ handleSubmit(add) }>
          <label htmlFor="name">Text</label>
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
