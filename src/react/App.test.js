import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';

it('matches snapshot', () => {
  expect(toJson(shallow(<App/>))).toMatchSnapshot();
});