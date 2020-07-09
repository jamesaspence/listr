import React from 'react';
import './Checkbox.scss';

const Checkbox = ({
  className = '',
  id,
  checked = false,
  onChange
}) => {
  return (
    <div className={`Checkbox ${className}`}>
      <input type="checkbox" className="Checkbox__hidden" id={id} checked={checked} onChange={onChange}/>
      <label htmlFor={id} className={`Checkbox__styled ${checked ? 'Checkbox__checked' : ''}`}>
        <svg className="Checkbox__icon" viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </label>
    </div>
  );
};

export default Checkbox;