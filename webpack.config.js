module.exports = {
    entry: __dirname + '/src/click.js',
    output: {
        path: __dirname + '/dist',
        filename: 'click.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'  ,
            query: {
                presets: ['es2015']
            }
        }]
    }
};
