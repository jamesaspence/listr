import React from 'react';
import { createPortal } from 'react-dom';
import './DeleteConfirmationModal.scss';
import OverlayContainer from './OverlayContainer';

const DeleteConfirmationModal = ({ onConfirm, onCancel }) => {
  return createPortal((
    <OverlayContainer>
      <div className='DeleteConfirmationModal'>
        <h3>Are you sure?</h3>
        <p>This action cannot be undone once confirmed.</p>
        <button type="button" onClick={onConfirm} className='DeleteConfirmationModal__confirm'>Confirm</button>
        <button type="button" onClick={onCancel} className={'DeleteConfirmationModal__cancel'}>Cancel</button>
      </div>
    </OverlayContainer>
  ), document.querySelector('#overlay'));
};

export default DeleteConfirmationModal;