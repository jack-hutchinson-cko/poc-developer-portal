import { shallow } from 'enzyme';
import React from 'react';
import { Information, StyledWrapper } from './component';

describe('Information component', () => {
	test.each`
		type             | color
		${'tip'}         | ${'var(--tip)'}
		${'information'} | ${'var(--information)'}
		${'note'}        | ${'var(--note)'}
		${'warning'}     | ${'var(--warning)'}
	`('component matches snapshot with type $type', ({ color, type }) => {
		expect.assertions(2);

		const wrapper = shallow(<Information type={type}>Lorem Ipsum</Information>);
		const activeBg = wrapper.find(StyledWrapper).props().activeBg;

		expect(wrapper).toMatchSnapshot();
		expect(activeBg).toBe(color);
	});
});
