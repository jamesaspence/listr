import React from 'react';
import './Checkbox.scss';

const Checkbox = ({
  className = '',
  id,
  checked = false,
  onChange
}) => {
  return (
    <div className={`Checkbox ${className}`} onClick={onChange}>
      <input className="Checkbox__toggle" type="checkbox" id={id} onChange={onChange} checked={checked}/>
      <label className="Checkbox__toggleLabel" htmlFor={id} />
    </div>
  );
};

export default Checkbox;