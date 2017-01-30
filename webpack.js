#!/usr/bin/env node


const path		= require('path');
const webpack	= require('webpack');

webpack({
	entry: {
		main: './main'
	},
	output: {
		filename: '[name].js',
		chunkFilename: '[name].js',
		path: path.join(__dirname, 'out')
	},
	plugins: [
		new webpack.optimize.AggressiveSplittingPlugin({
			minSize: 30000,
			maxSize: 50000
		}),
		/* Workaround for issue #3851 */
		new webpack.optimize.CommonsChunkPlugin({
			name: 'init',
			minChunks: Infinity
		})
	],
	recordsPath: path.join(__dirname, 'records.json')
}, (err, stats) => {
	if (err) {
		throw err;
	}

	for (const chunk of stats.compilation.entrypoints.main.chunks) {
		for (const file of chunk.files) {
			console.log(`Generated out/${file}.`);
		}
	}
});
