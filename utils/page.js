/**
 * 页面类
 */
const fs = require("fs-extra");
const path = require("path");
const ejs = require("ejs");
const glob = require("glob");

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
  /**
   * 构造函数
   * @param {*} mdDir .md文件路径
   * @param {*} pageConfig 页面配置
   */
  constructor(mdDir, pageConfig) {
    console.log("mdDir", mdDir);
    if (!mdDir) {
      throw new Error("create new Page need mdDir");
    }
    this.categories = {};
    this.tags = {};
    this.mdDir = mdDir;
    this.pageConfig = pageConfig;
  }
  /**
   * 读取markdown文章
   */
  _loadMd() {
    const mdFiles = glob.sync("**/*.md", { cwd: this.mdDir });
    this.mdList = mdFiles;
    console.log("===mdFiles===", mdFiles);
    console.log("===this.mdDir===", this.mdDir);
  }
  /**
   * 加载模板
   * @param {*} templateConfig 模板配置
   */
  loadTemplate(templateConfig) {
    console.log("templateConfig", templateConfig);
    return this;
  }
  build() {
    console.log("build");
  }
}

module.exports = Page;
