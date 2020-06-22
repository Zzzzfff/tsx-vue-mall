module.exports = {
    configureWebpack: {
        devServer: {
            open: true,
        },
        resolve: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'common': 'components/common',
                'content': 'components/content',
                'network': '@/network',
                'views': '@/views',
            }
        }
    },
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true,
            }
        }
    },

}