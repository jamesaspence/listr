import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createItem } from '../../../redux/actions/list';
import NewListItemPromptContainer from './NewListItemPromptContainer';
import { shallow } from 'enzyme';
import NewListItemPrompt from './NewListItemPrompt';

jest.mock('react-redux');
jest.mock('../../../redux/actions/list');

const activeList = 'list12345';
const TEST_STATE = {
  list: {
    activeList,
    lists: {
      [activeList]: []
    }
  }
};

const mockDispatch = jest.fn();

beforeEach(() => {
  mockDispatch.mockReset();
  useDispatch.mockReset();
  useSelector.mockReset();
  createItem.mockReset();

  useSelector.mockImplementation(selector => selector(TEST_STATE));
  useDispatch.mockReturnValue(mockDispatch);
});

it('matches snapshot', () => {
  expect(shallow(<NewListItemPromptContainer />)).toMatchSnapshot();
});

it('dispatches createItem correctly', () => {
  const wrapper = shallow(<NewListItemPromptContainer />);
  const text = 'test text';

  const onNewItem = wrapper.find(NewListItemPrompt).prop('onNewItem');

  onNewItem(text);
  expect(createItem).toHaveBeenCalledTimes(1);
  expect(mockDispatch).toHaveBeenCalledTimes(1);
  expect(createItem).toHaveBeenCalledWith(activeList, text);
});