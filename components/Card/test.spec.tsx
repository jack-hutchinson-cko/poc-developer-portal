import { shallow } from 'enzyme';
import React from 'react';
import { Card } from './component';

describe('Card component', () => {
	test('component matches snapshot', () => {
		expect.assertions(1);

		const wrapper = shallow(
			<Card to="/" title="Tip">
				Some text
			</Card>
		);

		expect(wrapper).toMatchSnapshot();
	});
});
