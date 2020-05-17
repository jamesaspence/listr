import React from 'react';
import { shallow } from 'enzyme';
import DragDropList from './DragDropList';
import ActiveListContainer from './ActiveListContainer';
import { useSelector, useDispatch } from 'react-redux';
import NoListFallback from './NoListFallback';
import { toggleItem, deleteItem } from '../../redux/actions/list';

jest.mock('react-redux', () => {
  return {
    __esModule: true,
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
    connect: jest.fn(() => component => component)
  };
});
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

const SELECTOR_PROPS = {
  items: listItems,
  listId: activeList
};

const mockDispatch = jest.fn();

beforeEach(() => {
  useSelector.mockReset();
  useDispatch.mockReset();
  toggleItem.mockReset();
  deleteItem.mockReset();
  mockDispatch.mockReset();

  useSelector.mockImplementation(selector => SELECTOR_PROPS);
  useDispatch.mockReturnValue(mockDispatch);
});

it('matches snapshot', () => {
  expect(shallow(<ActiveListContainer />)).toMatchSnapshot();
});

it('renders fallback if no data available', () => {
  useSelector.mockImplementation(() => ({
    items: null,
    listId: null
  }));
  const wrapper = shallow(<ActiveListContainer />);
  expect(wrapper.exists(NoListFallback)).toBeTruthy();
  expect(wrapper.exists(DragDropList)).toBeFalsy();
});

it('passes correct props to action dispatchers', () => {
  const wrapper = shallow(<ActiveListContainer />);

  const firstListItem = wrapper.find(DragDropList).first();
  const onDelete = firstListItem.prop('onDelete');
  const onCheck = firstListItem.prop('onCheck');

  const testItemId = 'testItem12345';
  onDelete(testItemId);
  onCheck(testItemId);
  expect(toggleItem).toHaveBeenCalledTimes(1);
  expect(deleteItem).toHaveBeenCalledTimes(1);
  expect(mockDispatch).toHaveBeenCalledTimes(2);
  expect(toggleItem).toHaveBeenCalledWith(activeList, testItemId);
  expect(deleteItem).toHaveBeenCalledWith(activeList, testItemId);
});