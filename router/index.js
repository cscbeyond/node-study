const express = require('express');
const boom = require('boom');
const userRouter = require('./user');
const {
  CODE_ERROR
} = require('../utils/constant');

// 注册路由
const router = express.Router();
router.get('/', function (req, res) {
  res.send('欢迎学习node');
});


/**
 * 集中处理404请求的中间件
 * 注意：该中间件必须放在正常处理流程之后
 * 否则，会拦截正常请求
 */
router.use((req, res, next) => {
  next(boom.notFound('接口不存在'));
});
router.use('/user', userRouter)
module.exports = router;