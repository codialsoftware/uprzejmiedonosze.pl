module.exports = {
    entry: './src/main.js',
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [
            { test: /\.js/, loader: "eslint-loader" }
        ],
        loaders: [
            { test: /\.css$/, loader: 'style!css' },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-2']
                }
            }
        ]
    }
};