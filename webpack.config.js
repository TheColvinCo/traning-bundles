const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    index: path.resolve(__dirname, "./src/index.jsx"),
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        loader: "esbuild-loader",
        options: {
          target: "es2015",
        },
      },
			{
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
    modules: [
      "node_modules",
      "src",
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
  output: {
		clean: true,
    filename: "[name].[hash].bundle.js",
    path: path.resolve(__dirname, "output/webpack"),
  },
};
