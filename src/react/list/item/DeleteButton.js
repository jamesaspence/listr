import React from 'react';
import './DeleteButton.scss';

const DeleteButton = ({ onDelete, itemId }) => {
  const onDeleteClick = () => {
    onDelete(itemId);
  };

  return (
    <div className="DeleteButton">
      <button className="DeleteButton__inner" type="button" onClick={onDeleteClick}>
        Delete
      </button>
    </div>
  );
};

export default DeleteButton;