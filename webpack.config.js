const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: [
      'react-hot-loader/patch',
      './src/index.js',
      './src/sass/index.scss'
    ],
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader:'babel-loader',
                options:{
                    presets:['@babel/preset-env',"@babel/preset-react"]
                }
            }
          },
          {
            test:/\.scss$/,
            use:[
              MiniCssExtractPlugin.loader,
              "css-loader",
              "sass-loader"
            ],
            exclude: /node_modules/
          }
        ]
      },
      devtool:'source-map',
      mode: 'development',
      resolve: {
        extensions: ['*', '.js', '.jsx']
      },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins:[
      new webpack.HotModuleReplacementPlugin(),
      new MiniCssExtractPlugin({filename:'dist/css/style.css'}) // FIXME 빌드 할때는 dist/를 삭제해야 한다.
    ],
    devServer: {
      contentBase: './dist',
      hot: true
    }
};