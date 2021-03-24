import { shallow } from 'enzyme';
import React from 'react';
import FooterLinkList from './component';
import { footerData } from '../footerData';

describe('FooterLinkList component', () => {
	test.each`
		links
		${null}
		${footerData.body}
	`('component matches snapshot', ({ links }) => {
		expect.assertions(1);

		const wrapper = shallow(<FooterLinkList links={links} />);

		expect(wrapper).toMatchSnapshot();
	});
});
