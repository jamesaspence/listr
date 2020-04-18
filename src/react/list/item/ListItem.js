import React from 'react';
import './ListItem.scss';
import Checkbox from './Checkbox';

const ListItem = ({
  item,
  index,
  checked = false,
  onCheck
}) => (
  <div className="ListItem">
    <Checkbox className="ListItem__checkbox" checked={checked} index={index} onChange={onCheck} />
    <p className="ListItem__text">
      {item}
    </p>
  </div>
);

export default ListItem;