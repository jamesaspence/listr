import React from 'react';
import './ListItem.scss';
import Checkbox from './Checkbox';
import DeleteButton from './DeleteButton';
import DraggableHandle from './DraggableHandle';

const ListItem = ({
  item,
  itemId,
  index,
  checked = false,
  onCheck,
  onDelete,
  draggableProps,
  dragHandleProps,
  innerRef
}) => {
  return (
    <div
      {...draggableProps}
      ref={innerRef}
      className="ListItem"
    >
      <DraggableHandle dragHandleProps={dragHandleProps} />
      <Checkbox className="ListItem__checkbox" checked={checked} index={index} itemId={itemId} onChange={onCheck} />
      <p className={`ListItem__text ${checked ? 'ListItem__text--checked' : ''}`}>
        {item}
      </p>
      <DeleteButton itemId={itemId} onDelete={onDelete} />
    </div>
  );
};

export default ListItem;