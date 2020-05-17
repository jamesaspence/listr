import React from 'react';
import './ListItem.scss';
import Checkbox from './Checkbox';
import DeleteButton from './DeleteButton';
import { Draggable } from 'react-beautiful-dnd';
import DraggableHandle from './DraggableHandle';

const ListItem = ({
  item,
  itemId,
  index,
  checked = false,
  onCheck,
  onDelete
}) => {
  return (
    <Draggable draggableId={itemId} index={index}>
      {provided => (
        <div
          {...provided.draggableProps}
          ref={provided.innerRef}
          className="ListItem"
        >
          <DraggableHandle provided={provided} />
          <Checkbox className="ListItem__checkbox" checked={checked} index={index} itemId={itemId} onChange={onCheck} />
          <p className={`ListItem__text ${checked ? 'ListItem__text--checked' : ''}`}>
            {item}
          </p>
          <DeleteButton itemId={itemId} onDelete={onDelete} />
        </div>
      )}
    </Draggable>
  );
};

export default ListItem;