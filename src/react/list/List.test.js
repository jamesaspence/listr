import React from 'react';
import { shallow } from 'enzyme';
import List from './List';
import ListItem from './item/ListItem';

const testItems = [
  {
    item: 'apples',
    checked: false,
    id: '123123'
  },
  {
    item: 'oranges',
    checked: true,
    id: '321321'
  }
];

const TEST_PROPS = {
  items: testItems
};

const render = ({ items }) => <List>{items.map(renderItem)}</List>;

const renderItem = (itemProps, index) => <ListItem key={index} {...itemProps} />;

it('matches snapshot', () => {
  expect(shallow(render(TEST_PROPS))).toMatchSnapshot();
});