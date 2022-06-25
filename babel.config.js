module.exports = {
	presets: [
		'module:metro-react-native-babel-preset',
	],
	plugins: [
		[
			'module-resolver', {
				alias: {
					src: './src',
					root: './',
				},
			},
		],
		[
			'module:react-native-dotenv', {
				moduleName: 'react-native-dotenv',
			},
		],
	],
};