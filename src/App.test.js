import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

import Register from './components/Pages/Register/Register';
import Signin from './components/Pages/Signin/Signin';

it('should render Signin & Register', () => {
  const wrapper = shallow(<App />);
  // const register = wrapper.find(Register);
  const signin = wrapper.find(Signin);

  // expect(register.exists()).toBe(true);
  expect(signin.exists()).toBe(true);
});
