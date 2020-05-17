import React from 'react';
import NewListItemPromptContainer from '../list/create/NewListItemPromptContainer';
import ActiveListContainer from '../list/ActiveListContainer';

const ListView = () => {
  return (
    <div className="ListView">
      <ActiveListContainer />
      <NewListItemPromptContainer />
    </div>
  );
};

export default ListView;