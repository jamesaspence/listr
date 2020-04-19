import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from './Checkbox';

const testItemId = '123123';

const onChange = jest.fn();

it('matches snapshot', () => {
  expect(shallow(<Checkbox onChange={onChange} index={1} itemId={testItemId} checked={false} />)).toMatchSnapshot();
});

it('is unchecked correctly', () => {
  const container = shallow(<Checkbox onChange={onChange} index={1} itemId={testItemId} checked={false} />);
  expect(container.find('input[type="checkbox"]').prop('checked')).toBeFalsy();
});

it('is checked correctly', () => {
  const container = shallow(<Checkbox onChange={onChange} index={1} itemId={testItemId} checked={true} />);
  expect(container.find('input[type="checkbox"]').prop('checked')).toBeTruthy();
});

it('calls onChange when checked or unchecked', () => {
  const expectedEvent = new window.Event('change');

  const container = shallow(<Checkbox onChange={onChange} index={1} itemId={testItemId} checked={true} />);
  container.find('input[type="checkbox"]').simulate('change', expectedEvent);
  expect(onChange.mock.calls.length).toEqual(1);
  expect(onChange.mock.calls[0][0]).toEqual(testItemId);
  expect(onChange.mock.calls[0][1]).toEqual(expectedEvent);
});