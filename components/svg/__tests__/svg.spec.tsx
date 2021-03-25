import { shallow } from 'enzyme';
import React from 'react';
import * as svgs from '../index';

describe('svgs', () => {
	for (let key in svgs) {
		test(key, () => {
			expect.assertions(1);

			const Component = svgs[key];
			const wrapper = shallow(<Component />);

			expect(wrapper).toMatchSnapshot();
		});
	}
});
