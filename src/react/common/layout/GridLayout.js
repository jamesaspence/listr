import React, { Component } from 'react';
import './GridLayout.scss';

class GridLayout extends Component {
  render() {
    const { children = null, className = '' } = this.props;
    return (
      <div className={`GridLayout ${className}`}>
        {children}
      </div>
    );
  }
}

export default GridLayout;