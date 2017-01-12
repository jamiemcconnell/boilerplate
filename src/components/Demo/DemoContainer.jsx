import React, { Component } from 'react';
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';

export default class DemoContainer extends Component {
  render() {
    return (
      <div>
        <h1>DemoContainer</h1>

        <div className="list list--left">
          <ComponentOne/>
          <ComponentTwo/>
        </div>
      </div>
    );
  };
};
