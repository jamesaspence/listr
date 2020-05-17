import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import selectActiveListData from '../../redux/selectors/list/selectActiveListData';
import NoListFallback from './NoListFallback';
import { toggleItem, deleteItem } from '../../redux/actions/list';
import List from './List';
import AppCSSTransition from '../common/AppCSSTransition';
import ListItem from './item/ListItem';

const ActiveListContainer = () => {
  const { items, listId } = useSelector(selectActiveListData);
  const dispatch = useDispatch();

  if (items == null) {
    return (
      <NoListFallback />
    );
  }

  const onToggle = itemId => {
    dispatch(toggleItem(listId, itemId));
  };

  const onDelete = itemId => {
    dispatch(deleteItem(listId, itemId));
  };

  return (
    <List>
      {items.map((item, i) =>
        <AppCSSTransition key={item.id} prefix="ListItem" timeout={200}>
          <ListItem
            key={item.id}
            item={item.text}
            checked={item.checked}
            onDelete={onDelete}
            index={i}
            itemId={item.id}
            onCheck={onToggle}
          />
        </AppCSSTransition>
      )}
    </List>
  );
};

export default ActiveListContainer;