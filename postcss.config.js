module.exports = {
    plugins: {
        tailwindcss: {},
        'postcss-rem-to-responsive-pixel': {
            rootValue: 32,
            propList: ['*'],
            transformUnit: 'rpx',
            // 仅在小程序中转化 rem -> rpx, ref: https://github.com/sonofmagic/uni-app-vue2-tailwind-hbuilder-template/issues/6
            // replace: isWeapp
        }
    }
}
