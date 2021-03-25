import { shallow } from 'enzyme';
import React from 'react';
import Footer from './component';

describe('Footer component', () => {
	test('component matches snapshot', () => {
		expect.assertions(1);

		const wrapper = shallow(<Footer />);

		expect(wrapper).toMatchSnapshot();
	});
});
