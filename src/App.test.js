import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {any} state - Initial state for setup
 * @returns {ShallowWrapper}
 */

const setup = (props ={}, state=null) => {
  return shallow(<App {...props} />)
}

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = wrapper.find('[data-test="component-app"]');
  expect(appComponent.length).toBe(1)
})

test('renders increment button', () => {
  const wrapper = setup();
  const button = wrapper.find('[data-test="increment-button"]');
  expect(button.length).toBe(1)
})

test('displays our counter', () => {
  const wrapper = setup();
  const counterDisplay = wrapper.find('[data-test="counter-display"]');
  expect(counterDisplay.length).toBe(1)
})

// this is testing state, but meh for now
test('counter starts at 0', () => {

})

// testing that it affects the display is better directly checking the state
// less about the implementation, more about the behaviour
test('clicking button increments counter display', () => {

})
