import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without error', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find('[data-test="component-app"]');
  expect(appComponent.length).toBe(1)
})

test('renders increment button', () => {

})

test('displays our counter', () => {

})

// this is testing state, but meh for now
test('counter starts at 0', () => {

})

// testing that it affects the display is better directly checking the state
// less about the implementation, more about the behaviour
test('clicking button increments counter display', () => {

})
