import React from 'react';
import { shallow } from 'enzyme';
import AppCSSTransition from './AppCSSTransition';
import { CSSTransition } from 'react-transition-group';

const TEST_PROPS = {
  prefix: 'testPrefix',
  timeout: 50
};

it('matches snapshot', () => {
  expect(shallow(<AppCSSTransition {...TEST_PROPS}><p>Child</p></AppCSSTransition>)).toMatchSnapshot();
});

it('correctly configures classNames', () => {
  const wrapper = shallow(<AppCSSTransition {...TEST_PROPS} ><p>Child</p></AppCSSTransition>);
  const classNames = wrapper.find(CSSTransition).prop('classNames');
  Object.values(classNames).forEach(className => {
    expect(className.startsWith(TEST_PROPS.prefix)).toBeTruthy();
  });
});