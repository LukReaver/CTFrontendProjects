module.exports = {
    plugins: [
        require('autoprefixer')
        ({
            // 'browsers': ['default']
            'browsers': ['> 1%', 'last 2 versions']
        })
    ]
};