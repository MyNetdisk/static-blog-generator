/**
 * 本地服务浏览
 */
const express = require("express");
const staticServe = require("serve-static");
const path = require("path");
const chalk = require("chalk"); //每次跑项目控制台会有彩色的字体
const os = require("os"); //提供本地的相关信息

// 获取本地ip
function getNetWorkIp() {
  // 打开host
  let needHost = "";
  try {
    let network = os.networkInterfaces();
    for (const dev in network) {
      let iface = network[dev];
      for (let i = 0; i < iface.length; i++) {
        const alias = iface[i];
        if (
          alias.family === "IPv4" &&
          alias.address !== "127.0.0.1" &&
          !alias.internal
        ) {
          needHost = alias.address;
        }
      }
    }
  } catch (error) {
    needHost = "http://localhost";
  }
  return needHost;
}

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
      `App running at:
  - Local:   ${chalk.green(
    `http://localhost:${config.server.port}${config.server.root}`
  )}
  - Network: ${chalk.green(
    `http://${getNetWorkIp()}:${config.server.port}${config.server.root}`
  )}
      `
    );
  });
};
