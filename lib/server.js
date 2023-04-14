/**
 * 本地服务浏览
 */
const express = require("express");
const staticServe = require("serve-static");
const path = require("path");

/**
 * 本地服务浏览
 * @param {*} dir 命令行参数
 */
module.exports = function (dir) {
  dir = dir || ".";
  let config = require(path.resolve(dir, "config.json")); //读取配置文件
  const app = express(); //起一个服务
  app.use(config.basic.root + "/", staticServe(path.resolve(dir, "public"))); //指定静态公共文件
  //监听端口
  app.listen(config.server.port, () => {
    console.log(
      `the local blog server has been listened at localhost:${config.server.port}${config.basic.root}`
    );
  });
};
