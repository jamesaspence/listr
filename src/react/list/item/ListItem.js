import React from 'react';
import './ListItem.scss';
import Checkbox from './Checkbox';
import DeleteButton from './DeleteButton';

const ListItem = ({
  item,
  itemId,
  index,
  checked = false,
  onCheck,
  onDelete
}) => (
  <div className="ListItem">
    <Checkbox className="ListItem__checkbox" checked={checked} index={index} itemId={itemId} onChange={onCheck} />
    <DeleteButton itemId={itemId} onDelete={onDelete} />
    <p className={`ListItem__text ${checked ? 'ListItem__text--checked' : ''}`}>
      {item}
    </p>
  </div>
);

export default ListItem;