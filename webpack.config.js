const webpack = require('webpack'),
      path = require('path'),
      extractTextPlugin = require('extract-text-webpack-plugin'),
      htmlWebpackPlugin = require('html-webpack-plugin');

const cdnUrl = '';

if(typeof process.env.NODE_ENV === 'undefined') {
  process.env.NODE_ENV = 'development';
  console.log('NODE_ENV environment variable not set - using `development`');
}

const config = {
  context: __dirname + '/src',
  entry: {
    main: './main.jsx'
  },
  output: {
    path: 'dist',
    filename: 'assets/[name].js',
    publicPath: (process.env.NODE_ENV === 'production' ? cdnUrl : '')
  },
  resolve: {
    extensions: ['', '.jsx', '.js'],
    root: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')]
  },
  target: 'web',
  devtool: (process.env.NODE_ENV === 'production' ? 'source-map' : ''),
  module: {
    loaders: [
      {
        test: /\.(jsx|js)$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }, {
        test: /\.scss$/,
        loader: extractTextPlugin.extract(['css', 'sass'])
      }, {
        test: /\.html$/,
        loader: 'html'
      }
    ],
    sassLoader: {
      includePaths: ['./src/sass/modules']
    }
  },
  plugins: [
    new extractTextPlugin('assets/style.css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) || 'development'
    }),
    new htmlWebpackPlugin({
      hash: true,
      template: 'index.hbs'
    }),
    new webpack.BannerPlugin('/** Generated ' + new Date() + ' **/', { raw: true })
  ],
  watchOptions: {
    ignored: "node_modules/**/*.*"
  }
};

if(process.env.NODE_ENV === 'production') {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false }}));
}

module.exports = config;
