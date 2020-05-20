import React from 'react';
import { shallow } from 'enzyme';
import ItemCheckbox from './ItemCheckbox';
import Checkbox from '../../common/Checkbox';

const testItemId = '123123';

const onChange = jest.fn();

it('matches snapshot', () => {
  expect(shallow(<ItemCheckbox onChange={onChange} index={1} itemId={testItemId} checked={false} />)).toMatchSnapshot();
});

it('calls onChange when checked or unchecked', () => {
  const expectedEvent = new window.Event('change');

  const container = shallow(<ItemCheckbox onChange={onChange} index={1} itemId={testItemId} checked={true} />);
  const mockEvent = new window.Event('change');
  container.find(Checkbox).prop('onChange')(mockEvent);
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenCalledWith(testItemId, expectedEvent);
});