var  webpack = require('webpack');


module.exports = {
    entry: {
        app: __dirname + "/src/main",
        vendor: [
            'backbone',
            'jquery'
        ]
    },
    output: {
        path: __dirname + "/dist/js",
        filename: '[name].bundle.js',
        chunkFilename: "[id].bundle.[hash].js",
        publicPath: "./dist/js/" //The root being the static folder created from express
    },
    resolve: {
	  alias: {
	    vue: 'vue/dist/vue.js'
	  }
	}


}	