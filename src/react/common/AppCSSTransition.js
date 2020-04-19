import React from 'react';
import CSSTransition from 'react-transition-group/cjs/CSSTransition';

const generateClassNames = (prefix = '') => ({
  appear: `${prefix}--will-appear`,
  appearActive: `${prefix}--appearing`,
  appearDone: `${prefix}--appeared`,
  enter: `${prefix}--will-enter`,
  enterActive: `${prefix}--entering`,
  enterDone: `${prefix}--entered`,
  exit: `${prefix}--will-exit`,
  exitActive: `${prefix}--exiting`,
  exitDone: `${prefix}--exited`
});

const AppCSSTransition = ({
  prefix,
  timeout,
  children,
  ...props
}) => {
  const isIn = props.in;

  return (
    <CSSTransition in={isIn} timeout={timeout} classNames={generateClassNames(prefix)} {...props} >
      {children}
    </CSSTransition>
  );
};

export default AppCSSTransition;