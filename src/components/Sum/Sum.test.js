javascript
import React from 'react';
import { render } from '@testing-library/react';
import { Sum } from './Sum';

describe('Sum component', () => {
  test('should render correct sum', () => {
    const { getByText } = render(<Sum num1={2} num2={3} />);
    expect(getByText('5')).toBeInTheDocument();
  });

  test('should render correct sum for negative numbers', () => {
    const { getByText } = render(<Sum num1={-2} num2={3} />);
    expect(getByText('1')).toBeInTheDocument();
  });

  test('should render correct sum for zero values', () => {
    const { getByText } = render(<Sum num1={0} num2={0} />);
    expect(getByText('0')).toBeInTheDocument();
  });
});
