import fs from 'fs';
import path from 'path';
import {parse, format} from 'url';
import isRelativeUrl from 'is-relative-url';
import unique from 'array-uniq';
import test from 'ava';
import remark from 'remark';
import visit from 'unist-util-visit';
import whitelist from './_whitelist';

const lint = require('awesome-lint');

const readme = fs.readFileSync(path.join(__dirname, '..', 'readme.md'));
const links = [];

const getAwesomeListUrl = url => {
	if (isRelativeUrl(url)) {
		return false;
	}

	const {
		protocol,
		host,
		pathname
	} = parse(url);

	const sanitizedUrl = format({
		protocol,
		host,
		pathname
	});

	if (host !== 'github.com') {
		return false;
	}

	if (whitelist.has(sanitizedUrl)) {
		return false;
	}

	return sanitizedUrl;
};

remark()
	.use(() => tree => {
		visit(tree, 'link', link => {
			const url = getAwesomeListUrl(link.url);
			if (!url) {
				return;
			}

			links.push(url);
		});
	})
	.processSync(readme);

for (const link of unique(links)) {
	test.serial(link, async t => {
		console.log(link);
		await lint.report({
			filename: link
		});

		t.pass();
	});
}

// Default to including a single passing test just in case there are no Awesome
// lists that are not in the whitelist.
test('noop', t => {
	t.pass();
});
