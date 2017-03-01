var webpack = require("webpack");
var config = require('./webpack.config');


// returns a Compiler instance
var compiler = webpack(config);

compiler.run(function(err, stats) {
    // ...
    console.log(1111111);
    console.log(22222222)

    gutil.log('[webpack:build]', stats.toString({
        chunks: false, // Makes the build much quieter
        colors: true
    }));
});
// or
compiler.watch({ // watch options:
    aggregateTimeout: 300, // wait so long for more changes
    poll: true // use polling instead of native watchers
    // pass a number to set the polling interval
}, function(err, stats) {
    // ...
    console.log('changing')
});