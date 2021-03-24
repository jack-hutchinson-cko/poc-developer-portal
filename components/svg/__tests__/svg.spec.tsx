import * as svgs from '../index';

describe('svgs', () => {
	for (let key in svgs) {
		test(key, () => {
			expect.assertions(1);
			expect(svgs[key]).toMatchSnapshot();
		});
	}
});
