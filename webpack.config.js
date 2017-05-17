module.exports = {
    entry: './src/app.js',
    output: {
        filename: './public/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react', 'stage-1']
                    }
                }
            }
        ]
    },
    devServer: {
        contentBase: './public'
    }
};
