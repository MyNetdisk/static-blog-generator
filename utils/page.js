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
    this.mdList = mdFiles; //markdown文件 类型：数组
  }
  /**
   * 侧边栏统计
   * @param {*} md 文件名
   */
  _renderCategoryAndTag(md) {
    console.log("md", md);
  }
  /**
   * 渲染侧边栏
   */
  _renderSidebar() {}
  /**
   * 分页
   * @param {*} postList 文章发布列表
   */
  _sliceList(postList) {}
  /**
   * 渲染文章列表
   * @param {*} sidebar
   * @param {*} list
   */
  _renderPostList(sidebar, list) {
    // 按时间排序
    const sortByTime = (a, b) => {
      return b.createTime.getTime() - a.createTime.getTime();
    };
    return list;
  }
  /**
   * 渲染函数
   */
  _render() {
    console.log("render");
    this._loadMd(); //加载markdown文件
    this.mdList.forEach((md) => this._renderCategoryAndTag(md)); //侧边栏统计
    this.postCount = this.mdList.length; //markdown文件总发布数量
    this.sidebarData = this._renderSidebar(); //渲染侧边栏
    // const postLists = this._sliceList(
    //   this._renderPostList(sidebarData, this.mdList)
    // );
    // const pageCount = postLists.length;
    return ["hello.md"].map(() => {
      return ejs.render((this.pageTemplate, {}));
    });
  }
  /**
   * 加载模板
   * @param {*} templateConfig 模板配置
   */
  loadTemplate(templateConfig) {
    console.log("templateConfig", templateConfig);
    // 主题路径
    this.templateBaseDir = templateConfig.templateBaseDir;
    //布局模板路径
    this.layoutTemplate = path.join(
      templateConfig.templateBaseDir,
      templateConfig.layoutTemplate
    );
    //发布文章模板路径
    this.postTemplate = path.join(
      templateConfig.templateBaseDir,
      templateConfig.postTemplate
    );
    //侧边栏模板路径
    this.sidebarTemplate = path.join(
      templateConfig.templateBaseDir,
      templateConfig.sidebarTemplate
    );
    //底部模板路径
    this.footerTemplate = path.join(
      templateConfig.templateBaseDir,
      templateConfig.footerTemplate
    );
    //页面模板路径
    this.pageTemplate = fs.readFileSync(
      path.join(templateConfig.templateBaseDir, templateConfig.pageTemplate),
      "utf-8"
    );
    console.log("this.pageTemplate", this.pageTemplate);
    return this;
  }
  build() {
    const pagesHtml = this._render();
    console.log("pagesHtml", pagesHtml);
  }
}

module.exports = Page;
