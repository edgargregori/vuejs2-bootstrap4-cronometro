const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin")

var config = {
  output: {
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
		use: ExtractTextPlugin.extract({
			fallback: "style-loader",
			use: "css-loader"
		})
      }
    ]
  },
  externals: {
    bootstrap: 'bootstrap',
    bootstrapVue: 'bootstrap-vue'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin( {
      minimize : true,
      sourceMap : false,
      mangle: true,
      compress: {
        warnings: false
      }
    } )
	, new ExtractTextPlugin("main.css")
  ],
	devtool: '#eval-source-map'
};


module.exports = [
  merge(config, {
    entry: path.resolve(__dirname, './src/Cronometro/plugin.js'),
    output: {
      filename: 'vue-cronometro.min.js',
      libraryTarget: 'window',
      library: 'VueCronometro',
    }
  }),
  merge(config, {
    entry: path.resolve(__dirname, './src/Cronometro/Cronometro.vue'),
    output: {
      filename: 'vue-cronometro.js',
      libraryTarget: 'umd',
      library: 'vue-cronometro',
      umdNamedDefine: true
    }
  })
];
