import { shallow } from 'enzyme';
import React from 'react';
import LoginLink, { StyledContainer } from './component';
import LoginDropdown from '../LoginDropdown';

describe('LoginLink component', () => {
	test('component matches snapshot with dropdown closed', () => {
		expect.assertions(2);

		const wrapper = shallow(<LoginLink />);
		const dropdown = wrapper.find(LoginDropdown);

		expect(wrapper).toMatchSnapshot();
		expect(dropdown).toHaveLength(0);
	});

	test('component matches snapshot with dropdown open', () => {
		expect.assertions(2);

		const wrapper = shallow(<LoginLink />);
		wrapper.find(StyledContainer).simulate('click');
		const dropdown = wrapper.find(LoginDropdown);

		expect(wrapper).toMatchSnapshot();
		expect(dropdown).toHaveLength(1);
	});
});
