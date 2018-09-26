var path = require("path");
var webpack = require("webpack");
// var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var BrowserSyncPlugin = require("browser-sync-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CleanWebpackPlugin = require("clean-webpack-plugin");
const webpackDashboard = require("webpack-dashboard/plugin");
var FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

module.exports = {
  watch: true,
  // devtool: 'source-map',
  mode: "development",
  entry: {
    main: "./src/js/app.js",
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "js/[name].js"
  },

  module: {
    rules: [{
        test: /\.js$/,
        use: [{
          loader: "babel-loader",
          options: {
            presets: ["env"]
          }
        }]
      },   
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: ["css-loader?sourceMap!postcss-loader", "sass-loader?sourceMap"]
               })
      },   
      {
        test: /\.html$/,
        use: ["html-loader"]
      },

      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [{
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "img/",
              publicPath: "img/"
            }
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: "65-90",
                speed: 4
              },
              gifsicle: {
                interlaced: false
              }
              // the webp option will enable WEBP
              //   webp: {
              //     quality: 75
              //   }
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),  
        hot: true, 
  },
  plugins: [  

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'        
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
      // template: "src/index.html"
    }),
    new ExtractTextPlugin({
      filename: "css/[name].css",
      //disable for HMR
      // disable: true,
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3001,
      proxy: 'http://localhost:8080/',
      files: [{
        match: [
          '**/*.html'
        ],
        fn: function (event, file) {
          if (event === "change") {
            const bs = require('browser-sync').get('bs-webpack-plugin');
            bs.reload();
          }
        }
      }]
    }, {
      // prevent BrowserSync from reloading the page
      // and let Webpack Dev Server take care of this
      reload: false,
    }),

    new CleanWebpackPlugin(["dist"]),
    new FriendlyErrorsWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    // new HtmlWebpackInlineSVGPlugin(),
  ],

};

