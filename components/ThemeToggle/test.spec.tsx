import { shallow } from 'enzyme';
import React from 'react';
import { ThemeToggle, StyledContainer, StyledThumb } from './component';

describe('ThemeToggle component', () => {
	beforeEach(() => {
		global.window = {
			matchMedia: jest.fn(),
			sessionStorage: {
				setItem: jest.fn(),
				getItem: jest.fn(),
				removeItem: jest.fn(),
				clear: jest.fn(),
				key: jest.fn(),
				length: 2,
			},
		};

		global.document = {
			getElementById: jest.fn(() => ({ className: '' })),
		};
	});

	afterEach(() => {
		delete global.window;
	});

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
