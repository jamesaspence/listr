import { render, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';
import React from 'react';

const TEST_PROPS = {
  onChange: jest.fn(),
  className: 'checkbox',
  id: 'foo',
  checked: false
};

it('matches snapshot', () => {
  const { container } = render(<Checkbox {...TEST_PROPS} />);
  expect(container.firstChild).toMatchSnapshot();
});

it('is unchecked correctly', () => {
  const props = {
    ...TEST_PROPS,
    checked: false
  };
  const { container } = render(<Checkbox {...props} />);
  expect(container.querySelector('input[type="checkbox"]').checked).toBeFalsy();
});

it('is checked correctly', () => {
  const props = {
    ...TEST_PROPS,
    checked: true
  };
  const { container } = render(<Checkbox {...props} />);
  expect(container.querySelector('input[type="checkbox"]').checked).toBeTruthy();
});

it('triggers on change correctly', () => {
  const { container } = render(<Checkbox {...TEST_PROPS} />);
  fireEvent.click(container.querySelector('input[type="checkbox"]'));
  const { onChange } = TEST_PROPS;
  expect(onChange).toHaveBeenCalledTimes(1);
});