const express = require('express');

const router = require('./router')
const app = express();

app.use('/', router)


const server = app.listen(5000, function () {
  const { address, port } = server.address();
  console.log('服务器运行成功：http://', address, port);
})
