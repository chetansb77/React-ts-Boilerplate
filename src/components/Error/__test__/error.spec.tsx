import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Error from '..';
import Code from '../../utility/Code';

Enzyme.configure({ adapter: new Adapter() });

it('error component renders correctly', () => {
  const tree = renderer.create(<Error errorMessage="Error message" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('error component renders correctly when no error message', () => {
  const tree = renderer.create(<Error />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('error component should show code on img click toggle', () => {
  const wrapper = shallow(<Error errorMessage="Error message" />);
  wrapper.find('img').simulate('click');
  expect(wrapper.find(Code)).toHaveLength(1);
});
