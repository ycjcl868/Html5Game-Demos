### 《Html5游戏编程核心技术与实战》Demo

手敲一遍书中的 demo，学习一下 js 更深的应用`（游戏用的 js 很难但的确能提高 js 能力）`

以下是学习笔记：





### 第1章 游戏和HTML5初探

--------











### 第5章 网络通信基础 

------

##### 通信基本知识: 

* 服务器端通信框架Node.js基础
* Web sockets基础
* socket.io.js框架基础

##### 输入baidu.com 时，经历了以下几个步骤：

1. 客户端浏览器获取 Web 服务器的 IP 地址，建立 TCP 连接
2. 客户端浏览器向 Web 服务器发出HTTP请求
3. Web 服务器应答，并向客户端传递响应数据
4. Web 服务器断开和客户端的 TCP 连接

##### 套接字(socket相当于嘴巴)：来源于Unix 系统

* 流套接字：TCP
* 数据包套接字：UDP
* 原始套接字：可以读写内核没有处理的 IP 数据包

##### Node.js基础

> Node.js® is a JavaScript runtime built on [Chrome's V8 JavaScript engine](https://developers.google.com/v8/). Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.
>
> 译：NodeJS是建立在Chrome浏览器的JavaScript运行时基础上，用于快速构建可扩展的网络应用的平台。使用事件驱动，非阻塞I/O 模型，使得它轻量高效。



```javascript
server.listen(port,[hostname],[backlog(等待队列中的最大连接数，默认值是511)],[callback])
```

##### Web sockets基础

提供的浏览器与服务器间进行全双工通信的网络技术，可以实现长连接，双向实时通信。

```javascript
var client = new WebSocket("ws://localhost:9000/socket")
```

 必须以`ws或wss`开头，`readyState`状态通过以下数字常量表示：

* 0: CONNECTING，表示正在连接
* 1: OPEN，表示已经建立连接。
* 2: CLOSING，表示正在关闭连接
* 3: CLOSED，表示已经关闭连接

连接建立后，通过`send(data)`方法，发送数据到服务器。`WebSocket`支持的事件：

* onopen 建立连接时触发
* onmessage 收到数据触发
* onerror 发生错误触发
* onclose 关闭连接触发

