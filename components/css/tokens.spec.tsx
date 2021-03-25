import * as tokens from '../index';

describe('tokens', () => {
	for (let key in tokens) {
		test(key, () => {
			expect.assertions(1);
			expect(tokens[key]).toMatchSnapshot();
		});
	}
});
