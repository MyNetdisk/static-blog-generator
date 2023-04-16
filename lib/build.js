/**
 * 打包成静态文件
 */
const path = require("path");
const fse = require("fs-extra");
const fs = require("fs");
const moment = require("moment");

/**
 * 打包命令行
 * @param {*} dir 命令行目录参数
 * @param {*} options 命令行参数
 */
module.exports = function (dir, options) {
  dir = dir || ".";
  let outputDir = path.resolve(dir, options.output || "public"); //生成的静态文件目录
  let sourceDir = path.resolve(dir, "source", "_posts"); //来源目录
  let config = require(path.resolve(dir, "config.json")); //主题配置文件
  let themeDir = path.resolve(dir, "themes", config.theme.themeName); //主题配置
  let list = []; //列表页
  let tags = {}; //标签页
  let categories = {}; //分类页
  let archives = {}; //归档页
  let archivesList = []; //归档列表
};
