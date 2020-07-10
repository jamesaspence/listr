import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewListItemPrompt from './NewListItemPrompt';

const onNewItem = jest.fn();

beforeEach(() => {
  onNewItem.mockReset();
});

it('matches snapshot', () => {
  const { container } = render(<NewListItemPrompt onNewItem={onNewItem} />);
  expect(container.firstChild).toMatchSnapshot();
});

it('does not trigger callback if value is empty', () => {
  const { container } = render(<NewListItemPrompt onNewItem={onNewItem}/>);
  fireEvent.submit(container.querySelector('form'));
  expect(onNewItem).toHaveBeenCalledTimes(0);
});

it('sends value to callback on submit', () => {
  const { container } = render(<NewListItemPrompt onNewItem={onNewItem}/>);
  const expectedText = 'oranges';
  fireEvent.change(container.querySelector('input'), { target: { value: expectedText } });
  fireEvent.submit(container.querySelector('form'));

  expect(onNewItem).toHaveBeenCalledTimes(1);
  expect(onNewItem).toHaveBeenCalledWith(expectedText);
});