import React from 'react';
import './DraggableHandle.scss';

const DraggableHandle = ({ dragHandleProps }) => {
  return (
    <div
      {...dragHandleProps}
      className="DraggableHandle"
    >
      :
    </div>
  );
};

export default DraggableHandle;