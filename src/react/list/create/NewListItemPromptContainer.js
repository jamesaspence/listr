import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewListItemPrompt from './NewListItemPrompt';
import { createItem } from '../../../redux/actions/list';
import selectActiveListId from '../../../redux/selectors/list/selectActiveListId';

const NewListItemPromptContainer = () => {
  const dispatch = useDispatch();
  const activeList = useSelector(selectActiveListId);

  const onNewItem = text => {
    dispatch(createItem(activeList, text));
  };

  return (
    <NewListItemPrompt onNewItem={onNewItem}/>
  );
};

export default NewListItemPromptContainer;