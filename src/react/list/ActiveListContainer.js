import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import selectActiveList from '../../redux/selectors/list/selectActiveList';
import selectActiveListId from '../../redux/selectors/list/selectActiveListId';
import ContentWrap from '../common/ContentWrap';
import NoListFallback from './NoListFallback';
import { toggleItem, deleteItem } from '../../redux/actions/list';
import ActiveList from './ActiveList';
import NewListItemPromptContainer from './create/NewListItemPromptContainer';

const ActiveListContainer = () => {
  const list = useSelector(selectActiveList);
  const activeList = useSelector(selectActiveListId);
  const dispatch = useDispatch();

  if (list == null) {
    return (
      <ContentWrap>
        <NoListFallback />
      </ContentWrap>
    );
  }

  const onToggle = itemId => {
    dispatch(toggleItem(activeList, itemId));
  };

  const onDelete = itemId => {
    dispatch(deleteItem(activeList, itemId));
  };

  return (
    <ContentWrap>
      <ActiveList items={list} onDelete={onDelete} onToggle={onToggle} />
      <NewListItemPromptContainer/>
    </ContentWrap>
  );
};

export default ActiveListContainer;