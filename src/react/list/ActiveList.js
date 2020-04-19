import React from 'react';
import './ActiveList.scss';
import ListItem from './item/ListItem';
import TransitionGroup from 'react-transition-group/cjs/TransitionGroup';
import AppCSSTransition from '../common/AppCSSTransition';

const ActiveList = ({ items, onDelete, onToggle }) => (
  <TransitionGroup className="ActiveList">
    {items.map((item, i) =>
      <AppCSSTransition key={item.id} prefix="ListItem" timeout={200}>
        <ListItem
          key={item.id}
          item={item.text}
          checked={item.checked}
          onDelete={onDelete}
          index={i}
          itemId={item.id}
          onCheck={onToggle}
        />
      </AppCSSTransition>
    )}
  </TransitionGroup>
);

export default ActiveList;