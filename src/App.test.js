import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

import Dashboard from './components/Layout/Dashboard/Dashboard';
import Signin from './components/Pages/Signin/Signin';

it('should render Dashboard', () => {
  const wrapper = shallow(<App />);
  const signin = wrapper.find(Signin);

  expect(signin.exists()).toBe(true);
});
