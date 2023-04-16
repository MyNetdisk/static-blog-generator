/**
 * 页面类
 */
const fs = require("fs-extra");
const path = require("path");
const ejs = require("ejs");

/**
 * 页面类 /page/*
 * @description
 * 创建一个页面需要
 *  - 模板
 *    - 模板目录
 *  - 页面配置
 *    - 分页配置
 *    - 底部配置
 *    - 侧边栏配置
 *    - 页面基础信息配置
 *  - 内容
 *    - 文章列表或文章全文
 *    - 侧边栏或带有目录的侧边栏
 *    - 底部
 *  - 输出目录
 */

class Page {
  constructor(mdDir, pageConfig) {
    if (!mdDir) {
      throw new Error("create new Page need mdDir");
    }
    this.categories = {};
    this.tags = {};

    this.mdDir = mdDir;
    this.pageConfig = pageConfig;
  }
}

module.exports = Page;
