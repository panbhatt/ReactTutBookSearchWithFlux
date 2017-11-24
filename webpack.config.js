var webpack = require('webpack') ;
var path = require('path') ;

module.exports = {
  entry : "./src/client/app.js",
  output : {
    path :  __dirname + "/dist/assets",
    filename : "bundle.js",
    sourceMapFilename : 'bundle.map'
  },
  devtool : '#source-map',
  watch:true,
  resolve : { extensions : [ ".js", ".ts"]},
  devServer : {
    contentBase : path.join(__dirname, "/dist/" ),
    port : 9000
  },
  watchOptions: {
   aggregateTimeout: 300,
   poll: 1000 // is this the same as specifying --watch-poll?
 },
  module : {
    loaders : [
      {
        test : /\.js$/,
        exclude: /(node_modules)/,
        loader : ['babel-loader'],
      }
    ]
  },
  plugins : [
    /*new webpack.optimize.UglifyJsPlugin( {
      sourceMap : true,
      warnings : false,
      mangle : true
    })  */
  ]


}
