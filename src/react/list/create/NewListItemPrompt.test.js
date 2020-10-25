import { shallow } from 'enzyme';
import React from 'react';
import NewListItemPrompt from './NewListItemPrompt';

const onNewItem = jest.fn();

it('matches snapshot', () => {
  expect(shallow(<NewListItemPrompt onNewItem={onNewItem} />)).toMatchSnapshot();
});

it('does not trigger callback if value is empty', () => {
  const container = shallow(<NewListItemPrompt onNewItem={onNewItem}/>);

  container.find('.NewListItemPrompt__input').simulate('change', { target: { value: '' } });
  container.find('form').simulate('submit', new window.Event('submit'));

  expect(onNewItem.mock.calls.length).toEqual(0);
});

it('sends value to callback on submit', () => {
  const container = shallow(<NewListItemPrompt onNewItem={onNewItem}/>);
  const expectedText = 'oranges';

  container.find('.NewListItemPrompt__input').simulate('change', { target: { value: expectedText } });
  container.find('form').simulate('submit', new window.Event('submit'));

  expect(onNewItem.mock.calls.length).toEqual(1);
  expect(onNewItem.mock.calls[0][0]).toEqual(expectedText);
});

it('is disabled on empty string input', () => {
  const container = shallow(<NewListItemPrompt onNewItem={onNewItem}/>);

  container.find('.NewListItemPrompt__input').simulate('change', { target: { value: '   ' } });
  container.find('.NewListItemPrompt__submit').hasClass('disabled');
});