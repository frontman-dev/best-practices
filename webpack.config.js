const path = require("path")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")

const mode = process.env.NODE_ENV || "development"

const output = {
  path: path.resolve(__dirname, "build"),
  filename: `[name].js`,
}

const rules = [
  {
    test: /\.ts(x?)$/,
    exclude: /node_modules/,
    use: [
      {
        loader: "babel-loader",
      },
      {
        loader: "ts-loader",
      },
    ],
  },
  {
    test: /\.css$/,
    exclude: [/(node_modules)/, /\.global\.css$/, path.resolve("src/styles")],
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          modules: {
            localIdentName: mode === "production" ? "[hash:base64]" : "[path][name]__[local]--[hash:base64:5]",
          },
        },
      },
    ],
  },
  {
    test: /\.css$/,
    include: [/(node_modules)/, /\.global\.css$/, path.resolve("src/styles")],
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          modules: false,
        },
      },
    ],
  },
  {
    test: /\.(woff(2)?|otf|png|jpg|jpeg|gif|svg)$/,
    use: [
      {
        loader: "url-loader",
        options: {
          limit: 100 * 1024,
        },
      },
    ],
    exclude: /(node_modules)/,
  },
]

const resolve = {
  extensions: [".tsx", ".ts", ".js"],
  alias: {
    "~": path.resolve("src"),
  },
}

const optimization =
  mode === "development"
    ? {}
    : {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            parallel: true,
            terserOptions: {
              ecma: 6,
            },
          }),
        ],
      }

module.exports = {
  mode,
  entry: {
    app: path.resolve(__dirname, "src/index.tsx"),
  },
  output,
  module: {
    rules,
  },
  resolve,
  optimization,
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "./src/static", to: path.join(__dirname, "build") }],
    }),
  ],
  devServer: {
    port: 2022,
    hot: false,
    liveReload: true,
    historyApiFallback: true,
  },
}
