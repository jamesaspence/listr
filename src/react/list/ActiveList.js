import React from 'react';
import './ActiveList.scss';
import ListItem from './item/ListItem';

const ActiveList = ({ items, onDelete, onToggle }) => (
  <div className="List">
    { items.map((item, i) => <ListItem key={i} item={item.text} checked={item.checked} onDelete={onDelete} index={i} itemId={item.id} onCheck={onToggle} />) }
  </div>
);

export default ActiveList;