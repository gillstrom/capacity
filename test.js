import test from 'ava';
import fn from './';

test('capacity', async t => {
	const cap = await fn();

	t.is(typeof cap, 'number');
	t.true(cap >= 0 && cap <= 1);
});
