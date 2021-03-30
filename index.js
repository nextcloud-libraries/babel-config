module.exports = {
	plugins: [
		'@babel/plugin-proposal-class-properties',
		'@babel/plugin-syntax-dynamic-import',
		'@babel/plugin-transform-modules-commonjs',
	],
	presets: [
		[
			'@babel/preset-env',
			{
				useBuiltIns: false,
				modules: 'commonjs',
			},
		],
	],
}
