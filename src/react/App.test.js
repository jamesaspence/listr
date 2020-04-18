import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('matches snapshot', () => {
  expect(shallow(<App/>)).toMatchSnapshot();
});