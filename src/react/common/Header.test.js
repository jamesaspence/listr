import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

jest.mock('../../../package.json', () => ({
  version: '1.2.3'
}));

it('matches snapshot', () => {
  const { container } = render(<Header />);
  expect(container.firstChild).toMatchSnapshot();
});