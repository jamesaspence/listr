import React from 'react';
import './List.scss';
import ListItem from './item/ListItem';

const List = ({ items, onCheck }) => {
  return (
    <div className="List">
      { items.map((item, i) => <ListItem key={i} item={item.text} checked={item.checked} index={i} itemId={item.id} onCheck={onCheck} />) }
    </div>
  );
};

export default List;