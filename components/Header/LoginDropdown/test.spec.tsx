import { shallow } from 'enzyme';
import React from 'react';
import LoginDropdown from './component';

describe('LoginDropdown component', () => {
	test('component matches snapshot', () => {
		expect.assertions(1);

		const wrapper = shallow(<LoginDropdown />);

		expect(wrapper).toMatchSnapshot();
	});
});
