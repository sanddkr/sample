import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export class Header extends Component {
  constructor(props) {
    super(props);
    this.state= {};
  }
  render() {
    return (
        <div className="wrapper headerwrap fixed-top">
           <div className="container">
            <header className="text-center">Activate Your Device</header>
          </div>
        </div>
    )
  }
}