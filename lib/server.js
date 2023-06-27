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
  let config = require(path.resolve(dir, "site.config.json")); //读取配置文件
  const app = express(); //起一个服务
  app.use(config.server.root + "/", staticServe(path.resolve(dir, "build"))); //指定静态公共文件
  //监听端口
  app.listen(config.server.port, () => {
    console.log(
      `在浏览器中打开:http://localhost:${config.server.port}${config.server.root}`
    );
  });
};
