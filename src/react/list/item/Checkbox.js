import React from 'react';
import './Checkbox.scss';

const Checkbox = ({
  className,
  checked,
  index,
  onChange
}) => {
  const onToggle = event => {
    event.preventDefault();
    onChange(index, event);
  };

  return (
    <div className={`Checkbox ${className}`} onClick={onToggle}>
      <input className="Checkbox__toggle" type="checkbox" id={`Checkbox-${index + 1}`} onChange={onToggle} checked={checked}/>
      <label className="Checkbox__toggleLabel" htmlFor={`Checkbox-${index + 1}`}/>
    </div>
  );
};

export default Checkbox;