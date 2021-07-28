const path = require("path");

module.exports = {
	entry: {
		app: "./src/index.js",
	},
	mode: process.env.NODE_ENV,
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "index.bundle.js",
		publicPath: "/",
	},
	module: {
		rules: [
			{
				test: /.(jpe?g|gif|png|svg)$/i,
				use: [
					{
						loader: "url-loader",
						options: {
							limit: 10000,
						},
					},
				],
			},

			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000,
	},
};
