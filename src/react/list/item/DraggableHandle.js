import React from 'react';
import './DraggableHandle.scss';

const DraggableHandle = ({ provided }) => {
  return (
    <div
      {...provided.dragHandleProps}
      className="DraggableHandle"
    >
      :
    </div>
  );
};

export default DraggableHandle;