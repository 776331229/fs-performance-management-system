const {injectBabelPlugin} = require('react-app-rewired')
const rewireLess = require('react-app-rewire-less')
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, '.', dir)
}

module.exports = function override(config, env) {
    // 配置别名，～来表示src目录
    config.resolve.alias = {
        '~': resolve('src'),
        '~assets': resolve('src/assets'),
        '~pages': resolve('src/pages'),
        '~router': resolve('src/router'),
        '~store': resolve('src/store'),
        '~styles': resolve('src/styles'),
        '~utils': resolve('src/utils'),
    }
    config = injectBabelPlugin(['import', {
        libraryName: 'antd',
        style: true
    }], config)
    config = rewireLess.withLoaderOptions({
        javascriptEnabled: true, modifyVars: {
            "@primary-color": "#1DA57A"
        }
    })(config, env)

    return config
}