const path = require("path");

module.exports = {
	mode: process.env.NODE_ENV,
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "index.bundle.js",
		publicPath: "/",
	},
	devServer: {
		port: 5000,
		contentBase: "./dist",
		historyApiFallback: true,
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.css$/,
				use: ["css-loader", "style-loader"],
			},
		],
	},
};
