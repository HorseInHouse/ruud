const process = require('process');


module.exports = {
    publicPath:process.env.NODE_ENV === 'production' ? '/' : '/',
    outputDir:'./main'
}
