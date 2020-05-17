import React from 'react';
import { useDispatch } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import List from './List';
import AppCSSTransition from '../common/AppCSSTransition';
import ListItem from './item/ListItem';
import { reorderItem } from '../../redux/actions/list';

const DragDropList = ({
  items,
  listId,
  onDelete,
  onCheck
}) => {
  const dispatch = useDispatch();

  const onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.index === source.index) {
      return;
    }

    dispatch(reorderItem(listId, draggableId, source, destination));
  };

  return (
    <DragDropContext
      onDragEnd={onDragEnd}
    >
      <Droppable droppableId={listId}>
        {provided => (
          <List {...provided.droppableProps} innerRef={provided.innerRef}>
            {items.map((item, i) =>
              <AppCSSTransition key={item.id} prefix="ListItem" timeout={200}>
                <Draggable draggableId={item.id} index={i}>
                  {provided => (
                    <ListItem
                      key={item.id}
                      item={item.text}
                      checked={item.checked}
                      onDelete={onDelete}
                      index={i}
                      itemId={item.id}
                      onCheck={onCheck}
                      draggableProps={provided.draggableProps}
                      dragHandleProps={provided.dragHandleProps}
                      innerRef={provided.innerRef}
                    />
                  )}
                </Draggable>
              </AppCSSTransition>
            )}
            {provided.placeholder}
          </List>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DragDropList;