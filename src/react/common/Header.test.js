import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

jest.mock('../../../package.json', () => ({
  version: '1.2.3'
}));

it('matches snapshot', () => {
  expect(shallow(<Header />)).toMatchSnapshot();
});