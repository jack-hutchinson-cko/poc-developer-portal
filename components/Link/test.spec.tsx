import { shallow } from 'enzyme';
import React from 'react';
import { Link } from './component';

describe('Link component', () => {
	test('component matches snapshot', () => {
		expect.assertions(1);

		const wrapper = shallow(<Link to="/">Getting started</Link>);

		expect(wrapper).toMatchSnapshot();
	});
});
