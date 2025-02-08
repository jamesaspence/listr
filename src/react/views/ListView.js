import React from 'react';
import { useSelector } from 'react-redux';
import selectActiveListCount from '../../redux/selectors/list/selectActiveListCount';
import GridLayout from '../common/layout/GridLayout';
import NewListItemPromptContainer from '../list/create/NewListItemPromptContainer';
import ActiveListContainer from '../list/ActiveListContainer';
import CheckAllToggle from '../list/CheckAllToggle';
import DeleteItemsContainer from '../list/DeleteItemsContainer';

const ListView = () => {
  const itemCount = useSelector(selectActiveListCount);

  return (
    <GridLayout className="ListView">
      {
        itemCount > 0 &&
        <DeleteItemsContainer />
      }
      <CheckAllToggle id={'CheckAllToggle--top'} />
      <ActiveListContainer />
      {
        itemCount > 4  &&
        <CheckAllToggle id={'CheckAllToggle--bottom'} />
      }
      <NewListItemPromptContainer />
    </GridLayout>
  );
};

export default ListView;