const config = require("@ngineer/config-webpack/production");
const {renderer} = require("@ngineer/server");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const merge = require("webpack-merge");
const {routes} = require("./lib/routes");

module.exports = (env, argv) =>
	merge(config(env, argv), {
		plugins: routes.map(
			({location: url}) =>
				new HtmlWebpackPlugin({
					filename: path.join(url, "index.html").replace(/^\//, ""),
					templateContent: renderer({url})
				})
		)
	});
