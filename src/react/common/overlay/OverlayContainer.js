import React from 'react';
import './OverlayContainer.scss';

// TODO consider handling outside click to close modals
const OverlayContainer = ({ children }) => {
  return (
    <>
      <div className="OverlayContainerBackground"/>
      <div className="OverlayContainer">
        {children}
      </div>
    </>
  );
};

export default OverlayContainer;