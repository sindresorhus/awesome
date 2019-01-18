'use strict';

exports.plugins = [
	require('remark-lint'),

	// Official plugins
	[require('remark-lint-blockquote-indentation'), 2],
	[require('remark-lint-checkbox-character-style'), 'consistent'],
	require('remark-lint-checkbox-content-indent'),
	[require('remark-lint-code-block-style'), 'fenced'],
	require('remark-lint-definition-case'),
	require('remark-lint-definition-spacing'),
	[require('remark-lint-emphasis-marker'), 'consistent'],
	[require('remark-lint-fenced-code-marker'), '`'],
	require('remark-lint-file-extension'),
	require('remark-lint-final-newline'),
	require('remark-lint-hard-break-spaces'),
	[require('remark-lint-heading-style'), 'atx'],
	[require('remark-lint-link-title-style'), '\''],
	require('remark-lint-list-item-bullet-indent'),
	[require('remark-lint-list-item-indent'), 'space'],
	require('remark-lint-no-auto-link-without-protocol'),
	require('remark-lint-no-blockquote-without-marker'),
	require('remark-lint-no-emphasis-as-heading'),
	require('remark-lint-no-file-name-articles'),
	require('remark-lint-no-file-name-consecutive-dashes'),
	require('remark-lint-no-file-name-irregular-characters'),
	require('remark-lint-no-file-name-mixed-case'),
	require('remark-lint-no-file-name-outer-dashes'),
	require('remark-lint-no-heading-content-indent'),
	require('remark-lint-no-heading-indent'),
	require('remark-lint-no-heading-punctuation'),
	require('remark-lint-no-inline-padding'),
	[require('remark-lint-no-multiple-toplevel-headings'), 1],
	require('remark-lint-no-shell-dollars'),
	require('remark-lint-no-table-indentation'),
	require('remark-lint-no-undefined-references'),
	require('remark-lint-no-unused-definitions'),
	[require('remark-lint-ordered-list-marker-style'), 'consistent'],
	[require('remark-lint-ordered-list-marker-value'), 'ordered'],
	[require('remark-lint-rule-style'), '---'],
	[require('remark-lint-strong-marker'), 'consistent'],
	[require('remark-lint-table-cell-padding'), 'consistent'],
	require('remark-lint-table-pipe-alignment'),
	require('remark-lint-table-pipes'),
	[require('remark-lint-unordered-list-marker-style'), 'consistent'],

	// Third-party plugins
	require('remark-lint-no-empty-sections'),
	require('remark-lint-no-dead-urls'),

	// Custom plugins
    	require('awesome-lint/rules/badge'),
    	require('awesome-lint/rules/contributing'),
    	require('awesome-lint/rules/git-repo-age'),
    	require('awesome-lint/rules/index'),
    	require('awesome-lint/rules/license'),
    	// This currently doesn't work on nested lists
    	//...require('awesome-lint/rules/list-item'),
    	require('awesome-lint/rules/no-ci-badge'),
    	require('awesome-lint/rules/spell-check'),
    	require('awesome-lint/rules/toc')
];
