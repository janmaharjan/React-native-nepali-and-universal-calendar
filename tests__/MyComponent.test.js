import React from 'react';
import renderer from 'react-test-renderer';
import MyComponent from '../src/MyComponent';

test('renders correctly', () => {
  const tree = renderer.create(<MyComponent text="Hello, World!" />).toJSON();
  expect(tree).toMatchSnapshot();
});