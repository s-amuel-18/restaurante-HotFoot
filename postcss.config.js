module.exports = {
    plugins: [
        // require(`autoprefixer`),
        require(`postcss-cssnext`)({
            features: {
                autoprefixer: {
                    grid:true,
                    flexbox:false,
                }
              
            }
        }),
        require(`cssnano`)
    ]
}