module.exports = {
    // 当使用{Function}/require时，webpack需要选项中的标识符（ident）（复杂选项）。
    // 标识可以自由命名，只要它是唯一的。建议命名（标识：'postcss'）
    indent:'postcss',
    plugins: [
        require('autoprefixer')({
            "browsers": [
                "defaults",
                "not ie < 11",
                "last 2 versions",
                "> 1%",
                "iOS 7",
                "last 3 iOS versions"
            ]
        })
    ]
};