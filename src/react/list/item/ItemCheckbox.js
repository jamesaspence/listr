import React from 'react';
import Checkbox from '../../common/Checkbox';

const ItemCheckbox = ({
  className,
  checked,
  index,
  itemId,
  onChange
}) => {
  const onToggle = event => {
    event.preventDefault();
    onChange(itemId, event);
  };
  const id = `Checkbox-${index + 1}`;

  return (
    <Checkbox
      className={className}
      onChange={onToggle}
      id={id}
      checked={checked}
    />
  );
};

export default ItemCheckbox;