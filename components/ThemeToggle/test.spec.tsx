import { shallow } from 'enzyme';
import React from 'react';
import { ThemeToggle, StyledContainer, StyledThumb } from './component';

describe('ThemeToggle component', () => {
	test('component matches snapshot', () => {
		expect.assertions(1);

		const wrapper = shallow(<ThemeToggle />);

		expect(wrapper).toMatchSnapshot();
	});

	test('isDarkMode is true on container click', () => {
		expect.assertions(2);

		const wrapper = shallow(<ThemeToggle />);
		wrapper.find(StyledContainer).simulate('click');
		const thumbDarkMode = wrapper.find(StyledThumb).props().isDarkMode;

		expect(wrapper).toMatchSnapshot();
		expect(thumbDarkMode).toBe(true);
	});
});
