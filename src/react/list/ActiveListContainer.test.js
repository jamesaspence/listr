import React from 'react';
import { shallow } from 'enzyme';
import ActiveListContainer from './ActiveListContainer';
import { useSelector, useDispatch } from 'react-redux';
import NoListFallback from './NoListFallback';
import ActiveList from './ActiveList';
import { toggleItem, deleteItem } from '../../redux/actions/list';

jest.mock('react-redux');
jest.mock('../../redux/actions/list');

const activeList = 'list12345';
const listItems = [
  {
    id: '12345',
    text: 'Test Item 12345',
    checked: false
  },
  {
    id: '54321',
    text: 'Test Item 54321',
    checked: false
  }
];
const TEST_STATE = {
  list: {
    lists: {
      [activeList]: listItems
    },
    activeList
  }
};

const mockDispatch = jest.fn();

beforeEach(() => {
  useSelector.mockReset();
  useDispatch.mockReset();
  toggleItem.mockReset();
  deleteItem.mockReset();
  mockDispatch.mockReset();

  useSelector.mockImplementation(selector => selector(TEST_STATE));
  useDispatch.mockReturnValue(mockDispatch);
});

it('matches snapshot', () => {
  expect(shallow(<ActiveListContainer />)).toMatchSnapshot();
});

it('renders fallback if no data available', () => {
  useSelector.mockImplementation(() => null);
  const wrapper = shallow(<ActiveListContainer />);
  expect(wrapper.exists(NoListFallback)).toBeTruthy();
  expect(wrapper.exists(ActiveList)).toBeFalsy();
});

it('passes list to child list', () => {
  const wrapper = shallow(<ActiveListContainer />);
  expect(wrapper.exists(NoListFallback)).toBeFalsy();
  expect(wrapper.exists(ActiveList)).toBeTruthy();

  const listWrapper = wrapper.find(ActiveList);
  expect(listWrapper.prop('items')).toEqual(listItems);
  expect(listWrapper.prop('onDelete')).not.toBeNull();
  expect(listWrapper.prop('onToggle')).not.toBeNull();
});

it('passes correct props to action dispatchers', () => {
  const wrapper = shallow(<ActiveListContainer />);

  const listWrapper = wrapper.find(ActiveList);
  const onDelete = listWrapper.prop('onDelete');
  const onToggle = listWrapper.prop('onToggle');

  const testItemId = 'testItem12345';
  onDelete(testItemId);
  onToggle(testItemId);
  expect(toggleItem).toHaveBeenCalledTimes(1);
  expect(deleteItem).toHaveBeenCalledTimes(1);
  expect(mockDispatch).toHaveBeenCalledTimes(2);
  expect(toggleItem).toHaveBeenCalledWith(activeList, testItemId);
  expect(deleteItem).toHaveBeenCalledWith(activeList, testItemId);
});