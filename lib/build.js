/**
 * 打包成静态文件
 */
const path = require("path");
const fse = require("fs-extra");
const fs = require("fs");
const moment = require("moment");
const Page = require("../utils/page");
const CustomPage = require("../utils/customPage");

/**
 * 打包命令行
 * @param {*} dir 命令行目录参数
 * @param {*} options 命令行参数
 */
module.exports = function (dir, options) {
  dir = dir || ".";
  const outputDir = path.resolve(dir, options.output || "build"); //生成的静态文件目录
  const sourceDir = path.resolve(dir, "source"); //来源目录
  const postDir = path.join(sourceDir, "_posts"); //发布目录
  const siteConfig = require(path.resolve(dir, "site.config.json"));
  const config = require(path.resolve(
    `${dir}/template/themes/${siteConfig.theme}`,
    "config.json"
  )); //主题配置文件
  const themeDir = path.resolve(dir, "template/themes", siteConfig.theme); //主题配置
  const { footer, highlight } = config.theme;
  const { title, author, description, avatar } = config.basic;
  const sidebarConfig = {
    title,
    avatar,
    author,
    description,
    about: config.theme.about,
    nav: config.theme.nav,
    links: config.theme.links,
  };
  const footerConfig = {
    beian: footer.beian,
    year: footer.copyright.year,
    author,
  };
  // 页面配置
  const pageConfig = {
    title: config.basic.title,
    author: config.basic.author,
    description: config.basic.description,
    pageSize: config.theme.pageSize,
    outputDir,
    themeDir,
    footerConfig,
    sidebarConfig,
    codeTheme: highlight,
  };
  // 页面实例
  const page = new Page(postDir, pageConfig);
  page
    .loadTemplate({
      templateBaseDir: themeDir,
      layoutTemplate: "layout/layout.art",
      pageTemplate: "layout/page.art",
      postTemplate: "layout/post.art",
      postListTemplate: "layout/post_list.art",
      postItemTemplate: "layout/post_item.art",
      sidebarTemplate: "layout/sidebar.art",
      footerTemplate: "layout/footer.art",
    })
    .build();
  config.theme.nav.forEach((item) => {
    const navPage = new CustomPage(postDir, {
      ...pageConfig,
      title: `${item.label} | ${pageConfig.title}`,
      name: item.name,
    });
    navPage
      .loadTemplate({
        templateBaseDir: themeDir,
        sidebarTemplate: "layout/sidebar.art",
        sidebarData: page.sidebarData,
        categoriesData: page.categories,
        tagsData: page.tags,
        layoutTemplate: "layout/layout.art",
        footerTemplate: "layout/footer.art",
        customTemplate: `layout/${item.name}.art`,
      })
      .build();
  });
  const aboutPage = new CustomPage(postDir, {
    ...pageConfig,
    title: `关于 | ${pageConfig.title}`,
    name: "about",
    friends: config.theme.friends,
  });
  aboutPage
    .loadTemplate({
      templateBaseDir: themeDir,
      sidebarTemplate: "layout/sidebar.art",
      sidebarData: page.sidebarData,
      categoriesData: page.categories,
      tagsData: page.tags,
      layoutTemplate: "layout/layout.art",
      footerTemplate: "layout/footer.art",
      customTemplate: `layout/post.art`,
    })
    .build();
  console.log("页面生成成功！");
};
