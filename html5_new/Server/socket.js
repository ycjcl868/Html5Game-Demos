var io = require('socket.io')().listen(9000);
// 注册连接事件
io.on('connection',function (socket) {
    socket.emit('hhhh');
    socket.on('message',function (msg) {
        // 处理消息
        doMsg(socket,msg);
    })

});
// 处理消息
function doMsg(socket, msg) {

    // 获取客户端ip
    var addr = socket.handshake.address.address;
    // 后台打印消息
    console.log(msg);
    console.log('receive msg from'+addr+': x 坐标:'+msg.x+", y坐标: "+msg.y);
    // 回传消息给客户端

    socket.send(msg);
    // 广播消息给其他客户端
    socket.broadcast.send(msg);


}
// 处理 http 请求
function httpHandler(request, response) {

}
