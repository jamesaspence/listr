import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ItemCheckbox from './ItemCheckbox';

const testItemId = '123123';

const TEST_PROPS = {
  onChange: jest.fn(),
  index: 1,
  itemId: testItemId,
  checked: false
};

it('matches snapshot', () => {
  const { container } = render(<ItemCheckbox { ...TEST_PROPS } />);
  expect(container.firstChild).toMatchSnapshot();
});

it('calls onChange when checked or unchecked', () => {
  const props = {
    ...TEST_PROPS
  };
  const { container } = render(<ItemCheckbox { ...props } />);
  fireEvent.click(container.querySelector('label'));
  const { onChange } = TEST_PROPS;

  expect(onChange).toHaveBeenCalledTimes(1);
});