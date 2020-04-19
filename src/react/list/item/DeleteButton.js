import React from 'react';
import './DeleteButton.scss';

const DeleteButton = ({ onDelete, itemId }) => {
  const onDeleteClick = () => {
    onDelete(itemId);
  };

  return (
    <button className="DeleteButton" type="button" onClick={onDeleteClick}>
      Delete
    </button>
  );
};

export default DeleteButton;