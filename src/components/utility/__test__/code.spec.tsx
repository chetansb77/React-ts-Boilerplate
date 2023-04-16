import React from 'react';
import renderer from 'react-test-renderer';
import Code from '../Code';

it('error component renders correctly', () => {
  const tree = renderer.create(<Code codeSnippet="Error traceback" />).toJSON();
  expect(tree).toMatchSnapshot();
});
