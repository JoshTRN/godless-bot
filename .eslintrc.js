module.exports = {
	env: {
		browser: true
	},
	extends: 'eslint:recommended',
	parserOptions: {
		ecmaVersion: 7
	},
	parser: 'babel-eslint',
	rules: {
		'brace-style': ['error', '1tbs'],
		'no-inner-declarations': ["off"],
		semi: ['error', 'never'],
		'max-len': ['error', { code: 180 }],
		indent: ['error', 'tab', { "SwitchCase": 1 }],
		'no-redeclare': ['error'],
		'no-empty': ['off'], // enable empty catch blocks
		'no-undef': ['off'], // because of global things like "define" and "log"
		'operator-linebreak': ['error', 'before'],
		'no-nested-ternary': ['error'],
		curly: ['error', 'multi', 'consistent'],
		'space-before-function-paren': ['error', 'always'],
		'keyword-spacing': ['error', { 'before': true, 'after': true }],
		'no-extra-parens': ["off"],
		'comma-dangle': ['error', 'never'],
		'no-unused-vars': ['error', { args: 'none' }],
		"no-multiple-empty-lines": ["error", { "max": 1 }]
	},
	overrides: [
		{
			files: ["**/gulp/*.js", 'gulpfile.js'],
			parserOptions: {
				ecmaVersion: 2019
			},
			env: {
				node: true
			},
			rules: {
				"no-console": 'off'
			}
		}
	]
}
