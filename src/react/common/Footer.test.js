import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

it('matches snapshot', () => {
  const { container } = render(<Footer />);
  expect(container.firstChild).toMatchSnapshot();
});