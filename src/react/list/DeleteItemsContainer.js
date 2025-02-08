import React, { useState } from 'react';
import './DeleteItemsContainer.scss';
import DeleteConfirmationModal from '../common/overlay/DeleteConfirmationModal';
import { useDispatch, useSelector } from 'react-redux';
import { ALL_ITEMS, CHECKED_ITEMS, deleteItems } from '../../redux/actions/list';
import selectActiveListId from '../../redux/selectors/list/selectActiveListId';

const DeleteItemsContainer = () => {
  const activeList = useSelector(selectActiveListId);
  const [ modalTypeOpen, setModalTypeOpen ] = useState(null);
  const dispatch = useDispatch();

  const onConfirm = () => {
    dispatch(deleteItems(activeList, modalTypeOpen));
    setModalTypeOpen(null);
  };
  const onCancel = () => {
    setModalTypeOpen(null);
  };
  const onDeleteAllClick = () => {
    setModalTypeOpen(ALL_ITEMS);
  };
  const onDeleteCheckedClick = () => {
    setModalTypeOpen(CHECKED_ITEMS);
  };

  return (
    <>
      <div className="DeleteItemsContainer">
        <div className="DeleteItemsContainer__all" onClick={onDeleteAllClick}>Delete all</div>
        <div className="DeleteItemsContainer__checked" onClick={onDeleteCheckedClick}>Delete checked</div>
      </div>
      {!!modalTypeOpen && (
        <DeleteConfirmationModal onConfirm={onConfirm} onCancel={onCancel} />
      )}
    </>
  );
};

export default DeleteItemsContainer;