import React from 'react';
import './Checkbox.scss';

const Checkbox = ({
  className,
  checked,
  index,
  onChange
}) => (
  <div className={`Checkbox ${className}`}>
    <input className="Checkbox__toggle" type="checkbox" id={`Checkbox-${index + 1}`} onChange={onChange} checked={checked}/>
    <label className="Checkbox__toggleLabel" htmlFor={`Checkbox-${index + 1}`}/>
  </div>
);

export default Checkbox;