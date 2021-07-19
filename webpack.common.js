const path = require("path");

module.exports = {
	entry: {
		app: "./src/index.js",
	},
	mode: process.env.NODE_ENV,
	//output: where the file will be sent once they have been bundled with the webpack. The source file passes through all the presets and loaders and create a file that will be loaded in the browser
	output: {
		//path: dirname= current directory. We'll place the file in a new one, called "/dist"
		path: path.join(__dirname, "/dist"),
		//all the react app code will be included in this js file (filename: ...)
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
				//when we find file which match js/jsx extension, use the babel loader to load it into webpack
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				//when we find file which match css extension, use style-loader to create a style tag, css-loader to load css to convert it into css
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
