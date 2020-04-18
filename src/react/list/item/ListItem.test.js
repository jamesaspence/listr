import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './ListItem';

const onCheck = jest.fn();

it('matches snapshot', () => {
  expect(shallow(<ListItem item="oranges" onCheck={onCheck} index={1} checked={false} />)).toMatchSnapshot();
});

it('is unchecked correctly', () => {
  const container = shallow(<ListItem onCheck={onCheck} index={1} checked={false} />);
  expect(container.find('.ListItem__checkbox').prop('checked')).toBeFalsy();
  expect(container.find('p').hasClass('ListItem__text--checked')).toBeFalsy();
});

it('is checked correctly', () => {
  const container = shallow(<ListItem item="oranges" onCheck={onCheck} index={1} checked={true} />);
  expect(container.find('.ListItem__checkbox').prop('checked')).toBeTruthy();
  expect(container.find('p').hasClass('ListItem__text--checked')).toBeTruthy();
});