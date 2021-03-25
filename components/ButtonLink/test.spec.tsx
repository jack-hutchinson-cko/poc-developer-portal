import { shallow } from 'enzyme';
import React from 'react';
import { ButtonLink } from './component';

describe('ButtonLink component', () => {
	test.each`
		hierarchy
		${'primary'}
		${'secondary'}
		${null}
	`('component matches snapshot', ({ hierarchy }) => {
		expect.assertions(1);

		const wrapper = shallow(
			<ButtonLink hierarchy={hierarchy} to="/">
				Getting started
			</ButtonLink>
		);

		expect(wrapper).toMatchSnapshot();
	});
});
