import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import selectActiveListAllChecked from '../../redux/selectors/list/selectActiveListAllChecked';
import selectActiveListId from '../../redux/selectors/list/selectActiveListId';
import { shallow } from 'enzyme';
import CheckAllToggle from './CheckAllToggle';
import Checkbox from '../common/Checkbox';
import { toggleAllChecked } from '../../redux/actions/list';

jest.mock('react-redux', () => {
  return {
    __esModule: true,
    useSelector: jest.fn(),
    useDispatch: jest.fn()
  };
});
jest.mock('../../redux/selectors/list/selectActiveListAllChecked');
jest.mock('../../redux/selectors/list/selectActiveListId');
const mockDispatch = jest.fn();

const TEST_PROPS = {
  id: 'foo'
};

const expectedListId = 'list1234';

beforeEach(() => {
  useSelector.mockReset();
  useDispatch.mockReset();
  mockDispatch.mockReset();
  selectActiveListAllChecked.mockReset();
  selectActiveListId.mockReset();
  selectActiveListId.mockReturnValue(expectedListId);

  useSelector.mockImplementation(selector => selector());
  useDispatch.mockReturnValue(mockDispatch);
});

it('matches snapshot', () => {
  selectActiveListAllChecked.mockReturnValueOnce(true);
  expect(shallow(<CheckAllToggle {...TEST_PROPS} />)).toMatchSnapshot();
});

it('is unchecked if allChecked returns false', () => {
  selectActiveListAllChecked.mockReturnValueOnce(false);
  const wrapper = shallow(<CheckAllToggle {...TEST_PROPS} />);
  expect(wrapper.find(Checkbox).prop('checked')).toBeFalsy();
});

it('is checked if allChecked returns true', () => {
  selectActiveListAllChecked.mockReturnValueOnce(true);
  const wrapper = shallow(<CheckAllToggle {...TEST_PROPS} />);
  expect(wrapper.find(Checkbox).prop('checked')).toBeTruthy();
});

it('dispatches correct values', () => {
  selectActiveListAllChecked.mockReturnValueOnce(true);
  const wrapper = shallow(<CheckAllToggle {...TEST_PROPS} />);
  wrapper.find(Checkbox).prop('onChange')();
  expect(mockDispatch).toHaveBeenCalledTimes(1);
  expect(mockDispatch).toHaveBeenCalledWith(toggleAllChecked(expectedListId));
});

it('dispatches if label is clicked', () => {
  selectActiveListAllChecked.mockReturnValueOnce(true);
  const wrapper = shallow(<CheckAllToggle {...TEST_PROPS} />);
  wrapper.find('label.CheckAllToggle__textLabel').simulate('click');
  expect(mockDispatch).toHaveBeenCalledTimes(1);
  expect(mockDispatch).toHaveBeenCalledWith(toggleAllChecked(expectedListId));
});

