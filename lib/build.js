/**
 * 打包成静态文件
 */
const path = require("path");
const fse = require("fs-extra");
const fs = require("fs");
const moment = require("moment");
const Page = require("../utils/page");

/**
 * 打包命令行
 * @param {*} dir 命令行目录参数
 * @param {*} options 命令行参数
 */
module.exports = function (dir, options) {
  dir = dir || ".";
  const outputDir = path.resolve(dir, options.output || "build"); //生成的静态文件目录
  const sourceDir = path.resolve(dir, "source", "_posts"); //来源目录
  const config = require(path.resolve(dir, "config.json")); //主题配置文件
  const themeDir = path.resolve(dir, "template/themes", config.theme.themeName); //主题配置
  // 页面配置
  const pageConfig = {
    title: config.basic.title,
    author: config.basic.author,
    description: config.basic.description,
    outputDir,
  };
  // 页面实例
  const page = new Page(sourceDir, pageConfig);
  page
    .loadTemplate({
      templateBaseDir: themeDir,
      layoutTemplate: "layout/layout.ejs",
      pageTemplate: "layout/page.ejs",
      postTemplate: "layout/post.ejs",
      sidebarTemplate: "layout/sidebar.ejs",
      footerTemplate: "layout/footer.ejs",
    })
    .build();
};
