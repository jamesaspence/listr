import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

it('matches snapshot', () => {
  expect(shallow(<Footer />)).toMatchSnapshot();
});