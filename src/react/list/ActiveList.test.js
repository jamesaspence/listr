import React from 'react';
import { shallow } from 'enzyme';
import ActiveList from './ActiveList';
import ListItem from './item/ListItem';

const testItems = [
  {
    text: 'apples',
    checked: false
  },
  {
    text: 'oranges',
    checked: true
  }
];

const TEST_PROPS = {
  items: testItems,
  onToggle: jest.fn(),
  onDelete: jest.fn()
};

it('matches snapshot', () => {
  expect(shallow(<ActiveList {...TEST_PROPS} />)).toMatchSnapshot();
});

it('renders items correctly', () => {
  const container = shallow(<ActiveList {...TEST_PROPS} />);
  container.find(ListItem).forEach((listItem, i) => {
    expect(i).toBeLessThan(testItems.length);
    const { checked, text } = testItems[i];
    expect(listItem.prop('checked')).toEqual(checked);
    expect(listItem.prop('item')).toEqual(text);
    expect(listItem.prop('onCheck')).toEqual(TEST_PROPS.onToggle);
    expect(listItem.prop('onDelete')).toEqual(TEST_PROPS.onDelete);
  });
});