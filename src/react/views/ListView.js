import React from 'react';
import NewListItemPromptContainer from '../list/create/NewListItemPromptContainer';
import ActiveListContainer from '../list/ActiveListContainer';
import CheckAllToggle from '../list/CheckAllToggle';

const ListView = () => {
  return (
    <div className="ListView">
      <CheckAllToggle id={'CheckAllToggle--top'} />
      <ActiveListContainer />
      <NewListItemPromptContainer />
      <CheckAllToggle id={'CheckAllToggle--bottom'} />
    </div>
  );
};

export default ListView;