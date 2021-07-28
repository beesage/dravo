const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
	mode: "development",
	devServer: {
		port: 5000,
		contentBase: "./dist",
		historyApiFallback: true,
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"],
	},
});
