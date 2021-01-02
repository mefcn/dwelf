const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: process.env.NODE_ENV == 'production' ? 'production' : 'development',
    entry: {
        'index.js': ['./src/index.js']
    },
    output: {
        path: `${__dirname}/dist`,
        filename: '[name]'
    },
    module: {
        rules: []
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: '*',
                    to: '', 
                    context: 'src',
                    globOptions: {
                        dot: false,
                        gitignore: false,
                        ignore: ['*.js']
                    }
                }
            ]
        })
    ],
    devServer: {
        https: true,
        disableHostCheck: true,
        host: '0.0.0.0'
    }
}