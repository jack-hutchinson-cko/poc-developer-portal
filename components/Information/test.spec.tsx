import { shallow } from 'enzyme';
import React from 'react';
import { Information, StyledWrapper } from './component';
import { colours } from '../css/tokens';

describe('Information component', () => {
	test.each`
		type             | color
		${'tip'}         | ${colours.tip}
		${'information'} | ${colours.information}
		${'note'}        | ${colours.note}
		${'warning'}     | ${colours.warning}
	`('component matches snapshot with type $type', ({ color, type }) => {
		expect.assertions(2);

		const wrapper = shallow(<Information type={type}>Lorem Ipsum</Information>);
		const activeBg = wrapper.find(StyledWrapper).props().activeBg;

		expect(wrapper).toMatchSnapshot();
		expect(activeBg).toBe(color);
	});
});
