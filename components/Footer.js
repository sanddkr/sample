import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export class Footer extends Component {
  constructor(props) {
    super(props);
    this.state= {};
  }
  render() {
    return (
      <div className="wrapper footerwrap fixed-bottom">
        <div className="container">
        <header className="text-center">Disclaimer</header>
      </div>
    </div>
    )
  }
}