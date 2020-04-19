import React from 'react';
import './ListItem.scss';
import Checkbox from './Checkbox';

const ListItem = ({
  item,
  itemId,
  index,
  checked = false,
  onCheck
}) => (
  <div className="ListItem">
    <Checkbox className="ListItem__checkbox" checked={checked} index={index} itemId={itemId} onChange={onCheck} />
    <p className={`ListItem__text ${checked ? 'ListItem__text--checked' : ''}`}>
      {item}
    </p>
  </div>
);

export default ListItem;