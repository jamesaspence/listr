import { shallow } from 'enzyme';
import { render, screen, fireEvent } from '@testing-library/react';
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

it('is unchecked by default', () => {
  const props = {
    ...TEST_PROPS,
    checked: false
  };
  const { container } = render(<Checkbox {...props} />);
  const checkbox = container.querySelector('input[type="checkbox"]');
  expect(checkbox.checked).toBeFalsy();
});

it('is checked correctly', () => {
  const props = {
    ...TEST_PROPS,
    checked: true
  };
  const { container } = render(<Checkbox {...props} />);
  const checkbox = container.querySelector('input[type="checkbox"]');
  expect(checkbox.checked).toBeTruthy();
});

it('triggers on change correctly', () => {
  const { container } = render(<Checkbox {...TEST_PROPS} />);
  const checkbox = container.querySelector('input[type="checkbox"]');
  fireEvent.change(checkbox);
  const { onChange } = TEST_PROPS;
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(checkbox.checked).toBeTruthy();
});