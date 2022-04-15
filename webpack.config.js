const path              = require("path");
const mode              = process.env.NODE_ENV;

let webpack_config = {
	mode	: mode,
	watch	: mode === "development",
	module 	: {
		rules	: [
			{
				test	: /\.js$/,
				exclude	: /node_modules/,
				use	: {
					loader	: "babel-loader",
					options	: {
						presets	: [
							[
								"@babel/preset-env", {
									"useBuiltIns"	: 'usage',
									"corejs"	: 3
								},
							],
						]
					},
				},
			},
		]
	},
}

let core = Object.assign({}, webpack_config, {
	entry	: {
		index	: path.resolve("./index.js"),
	},
	output	: {
		path			: path.resolve("./dist/"),
		filename		: "[name].js",
		sourceMapFilename	: "[name][ext].map",
		libraryTarget		: "umd",
	},
	devtool : "source-map"
})

module.exports = [
	core,
]
