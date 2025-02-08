import React, { useState } from 'react';
import './DeleteItemsContainer.scss';
import DeleteConfirmationModal from '../common/overlay/DeleteConfirmationModal';

const DeleteItemsContainer = () => {
  const [ modalOpen, setModalOpen ] = useState(false);

  const onConfirm = () => {
    setModalOpen(false);
  };
  const onCancel = () => {
    setModalOpen(false);
  };
  const onDeleteAllClick = () => {
    setModalOpen(true);
  };
  const onDeleteCheckedClick = () => {
    setModalOpen(true);
  };

  return (
    <>
      <div className="DeleteItemsContainer">
        <div className="DeleteItemsContainer__all" onClick={onDeleteAllClick}>Delete all</div>
        <div className="DeleteItemsContainer__checked" onClick={onDeleteCheckedClick}>Delete checked</div>
      </div>
      {modalOpen && (
        <DeleteConfirmationModal onConfirm={onConfirm} onCancel={onCancel} />
      )}
    </>
  );
};

export default DeleteItemsContainer;