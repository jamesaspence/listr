import React from 'react';
import './NewListItemPrompt.scss';

//TODO add editable state here

const NewListItemPrompt = () => {
  const onSubmit = event => {
    //TODO only submit if clicked?
    //TODO validate input, add to list
    event.preventDefault();
  };

  return (
    <form className="NewListItemPrompt" onSubmit={onSubmit}>
      <input className="NewListItemPrompt__input" type="text" placeholder="...New item"/>
    </form>
  );
};

export default NewListItemPrompt;