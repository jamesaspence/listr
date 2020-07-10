import React from 'react';
import './Checkbox.scss';

const Checkbox = ({
  className = '',
  id,
  checked = false,
  onChange
}) => {
  return (
    <label className={`Checkbox ${className} ${checked ? 'Checkbox__checked' : ''}`}>
      <input type="checkbox" className="Checkbox__hidden" id={id} checked={checked} onChange={onChange}/>
      <svg className="Checkbox__icon" viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </label>
  );
};

export default Checkbox;