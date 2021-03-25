import { shallow } from 'enzyme';
import React from 'react';
import SubFooter from './component';

class MockDate extends Date {
	constructor() {
		super('2021-05-14T11:01:58.135Z');
	}
}

describe('SubFooter component', () => {
	beforeEach(() => {
		// @ts-ignore
		global.Date = MockDate;
	});

	afterEach(() => {
		jest.resetAllMocks();
	});

	test('component matches snapshot', () => {
		expect.assertions(1);

		const wrapper = shallow(<SubFooter />);

		expect(wrapper).toMatchSnapshot();
	});
});
