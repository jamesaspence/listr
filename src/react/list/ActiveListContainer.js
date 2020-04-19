import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import selectActiveList from '../../redux/selectors/list/selectActiveList';
import selectActiveListId from '../../redux/selectors/list/selectActiveListId';
import ContentWrap from '../common/ContentWrap';
import NoListFallback from './NoListFallback';
import { toggleItem, deleteItem } from '../../redux/actions/list';
import NewListItemPromptContainer from './create/NewListItemPromptContainer';
import ListItem from './item/ListItem';

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
      <div className="ActiveListContainer">
        <div className="ActiveListContainer__list">
          { list.map((item, i) => <ListItem key={i} item={item.text} checked={item.checked} onDelete={onDelete} index={i} itemId={item.id} onCheck={onToggle} />) }
        </div>
        <NewListItemPromptContainer/>
      </div>
    </ContentWrap>
  );
};

export default ActiveListContainer;