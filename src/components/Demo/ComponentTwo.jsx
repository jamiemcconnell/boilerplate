'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';

import { loading } from 'actions/LoadingActions';
import { add } from 'actions/ListActions';

export class ComponentTwo extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    console.log(props);
    const { handleSubmit, pristine, reset, submitting } = props;
  }

  onSubmit(values) {
    values.preventDefault();
    console.log('onSubmit');
    console.log(values);
  }

  render() {
    return (
      <div>
        New Item
        <form name="newToDo" onSubmit={ this.onSubmit.bind(this) }>
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
