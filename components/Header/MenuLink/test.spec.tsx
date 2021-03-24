import { shallow } from 'enzyme';
import React from 'react';
import MenuLink, { StyledContainer } from './component';
import MenuDropdown from '../MenuDropdown';

describe('MenuLink component', () => {
	test('component matches snapshot with dropdown closed', () => {
		expect.assertions(2);

		const wrapper = shallow(<MenuLink />);
		const dropdown = wrapper.find(MenuDropdown);

		expect(wrapper).toMatchSnapshot();
		expect(dropdown).toHaveLength(0);
	});

	test('component matches snapshot with dropdown open', () => {
		expect.assertions(2);

		const wrapper = shallow(<MenuLink />);
		wrapper.find(StyledContainer).simulate('click');
		const dropdown = wrapper.find(MenuDropdown);

		expect(wrapper).toMatchSnapshot();
		expect(dropdown).toHaveLength(1);
	});
});
