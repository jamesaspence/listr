import { shallow } from 'enzyme';
import Checkbox from './Checkbox';
import React from 'react';

const TEST_PROPS = {
  onChange: jest.fn(),
  className: 'checkbox',
  id: 'foo',
  checked: false
};

it('matches snapshot', () => {
  expect(shallow(<Checkbox {...TEST_PROPS} />)).toMatchSnapshot();
});

it('is unchecked correctly', () => {
  const props = {
    ...TEST_PROPS,
    checked: false
  };
  const container = shallow(<Checkbox {...props} />);
  expect(container.find('input[type="checkbox"]').prop('checked')).toBeFalsy();
});

it('is checked correctly', () => {
  const props = {
    ...TEST_PROPS,
    checked: true
  };
  const container = shallow(<Checkbox {...props} />);
  expect(container.find('input[type="checkbox"]').prop('checked')).toBeTruthy();
});

it('triggers on change correctly', () => {
  const container = shallow(<Checkbox {...TEST_PROPS} />);
  const expectedEvent = new window.Event('change');
  const { onChange } = TEST_PROPS;
  container.find('input[type="checkbox"]').simulate('change', expectedEvent);
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenCalledWith(expectedEvent);
});