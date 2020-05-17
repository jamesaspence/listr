import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import selectActiveListData from '../../redux/selectors/list/selectActiveListData';
import NoListFallback from './NoListFallback';
import { toggleItem, deleteItem } from '../../redux/actions/list';
import DragDropList from './DragDropList';

const ActiveListContainer = () => {
  const { items, listId } = useSelector(selectActiveListData);
  const dispatch = useDispatch();

  if (items == null) {
    return (
      <NoListFallback />
    );
  }

  const onCheck = itemId => {
    dispatch(toggleItem(listId, itemId));
  };

  const onDelete = itemId => {
    dispatch(deleteItem(listId, itemId));
  };

  return (
    <DragDropList items={items} listId={listId} onDelete={onDelete} onCheck={onCheck} />
  );
};

export default ActiveListContainer;