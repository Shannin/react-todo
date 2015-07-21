var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var config = require("./webpack.config");

var server = new WebpackDevServer(webpack(config), {
    contentBase: __dirname + "/out/",
    publicPath: config.output.publicPath,
    historyApiFallback: true
});

server.listen(8080, function (err, result) {
    if (err) {
        console.log(err);
    }
    console.log("Listening at port 8080");
});