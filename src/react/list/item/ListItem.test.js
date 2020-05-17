import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './ListItem';
import DeleteButton from './DeleteButton';

const onCheck = jest.fn();

const TEST_PROPS = {
  onCheck: jest.fn(),
  onDelete: jest.fn(),
  index: 1,
  itemId: '123',
  checked: false,
  draggableProps: {},
  dragHandleProps: {},
  ref: null
};

it('matches snapshot', () => {
  expect(shallow(<ListItem {...TEST_PROPS} />)).toMatchSnapshot();
});

it('is unchecked correctly', () => {
  const container = shallow(<ListItem {...TEST_PROPS} />);
  expect(container.find('.ListItem__checkbox').prop('checked')).toBeFalsy();
  expect(container.find('p').hasClass('ListItem__text--checked')).toBeFalsy();
});

it('is checked correctly', () => {
  const container = shallow(<ListItem {...TEST_PROPS} checked={true} />);
  expect(container.find('.ListItem__checkbox').prop('checked')).toBeTruthy();
  expect(container.find('p').hasClass('ListItem__text--checked')).toBeTruthy();
});