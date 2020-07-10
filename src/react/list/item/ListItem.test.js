import React from 'react';
import { render } from '@testing-library/react';
import ListItem from './ListItem';

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
  const { container } = render(<ListItem {...TEST_PROPS} />);
  expect(container.firstChild).toMatchSnapshot();
});