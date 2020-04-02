const express = require('express');

const app = express();

// 前置中间件：在请求发起之前注册进来 做一些请求处理
// function myLogger(req, res, next) {
//   console.log('myLogger');
//   next(); // 必须调用 否则下面的不会执行
// }

// app.use(myLogger);



app.get('/', function (req, res) {
  throw new Error('错误');
  res.send('hello node');
})

// 后置中间件：通常做错误处理
function errorHandler(err, req, res, next) {
  console.log(err);
  res.status(500).json({
    error: -1,
    msg: err.toString()
  })
}
app.use(errorHandler);

const server = app.listen(5000, function () {
  const { address, port } = server.address();
  console.log('启动成功', address, port);
});