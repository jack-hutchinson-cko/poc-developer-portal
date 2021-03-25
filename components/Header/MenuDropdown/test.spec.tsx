import { shallow } from 'enzyme';
import React from 'react';
import MenuDropdown from './component';

describe('MenuDropdown component', () => {
	test('component matches snapshot', () => {
		expect.assertions(1);

		const wrapper = shallow(<MenuDropdown />);

		expect(wrapper).toMatchSnapshot();
	});
});
