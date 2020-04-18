import React from 'react';
import './List.scss';
import ListItem from './item/ListItem';

const List = ({ items, onCheck }) => (
  <div className="List">
    { items.map((item, i) => <ListItem key={i} item={item.text} checked={item.checked} index={i} onCheck={onCheck} />) }
  </div>
);

export default List;