import React from 'react';
import { shallow } from 'enzyme';
import NoListFallback from './NoListFallback';

it('matches snapshot', () => {
  expect(shallow(<NoListFallback />)).toMatchSnapshot();
});