var path = require('path');
module.exports = {
    entry: './src/index.js',
    devtool: 'sourcemaps',
    cache: true,
    debug: true,
    output: {
        path: __dirname,
        filename: './src/main/resources/static/built/bundle.js'
    },
    module: {
        loaders: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                loaders: ['react-hot-loader','babel-loader?' + JSON.stringify({
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                })],
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            }
            
        ]
    }
    
    
    	
};