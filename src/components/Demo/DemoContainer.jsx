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
        </div>

        <div className="list list--right">
          <ComponentTwo/>
        </div>

      </div>
    );
  };
};
