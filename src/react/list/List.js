import React from 'react';
import './List.scss';
import TransitionGroup from 'react-transition-group/cjs/TransitionGroup';

/*
 * This component will throw a warning during deletion of items.
 * See https://github.com/reactjs/react-transition-group/issues/429
 * and https://github.com/reactjs/react-transition-group/issues/606
 * We need to wait for react-transition-group to come to a solution to resolve this.
 */
const List = ({ children }) => (
  <TransitionGroup className="ActiveList">
    {children}
  </TransitionGroup>
);

export default List;