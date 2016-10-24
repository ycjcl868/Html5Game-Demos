var http = require('http');
var server = http.createServer(function (req, res) {
    // 写响应头
    res.writeHead(200,{'Content-Type':'text/plain'});
    // 输入文字
    res.write('Hello NodeJS');
    res.end();
});
// 启动监听
server.listen(8888,'localhost');