module.exports = {
	plugins: [
		'@babel/plugin-proposal-class-properties',
		'@babel/plugin-syntax-dynamic-import',
		'@babel/plugin-transform-modules-commonjs',
		'@babel/plugin-transform-shorthand-properties',
	],
	presets: [
		[
			'@babel/preset-env',
			{
				useBuiltIns: false,
				modules: 'auto',
			},
		],
	],
}
