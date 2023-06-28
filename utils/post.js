/**
 * 文章类
 */
const fs = require("fs-extra");
const path = require("path");
const art = require("art-template");
const { writeFile } = require("./writeFile");
const fm = require("front-matter");
const hljs = require("highlight.js");
const uslug = require("uslug");
const md = require("markdown-it")({
  highlight: function (str, lang) {
    // 当前时间加随机数生成唯一的id标识
    const codeIndex =
      parseInt(Date.now()) + Math.floor(Math.random() * 10000000);
    // 复制功能主要使用的是 clipboard.js
    let html = `<button class="copy-btn" type="button" data-clipboard-action="copy" data-clipboard-target="#copy${codeIndex}">复制</button>`;
    const linesLength = str.split(/\n/).length - 1;
    // 生成行号
    let linesNum = '<span aria-hidden="true" class="line-numbers-rows">';
    for (let index = 0; index < linesLength; index++) {
      linesNum = linesNum + "<span></span>";
    }
    linesNum += "</span>";
    if (lang && hljs.getLanguage(lang)) {
      try {
        // highlight.js 高亮代码
        const preCode = hljs.highlight(lang, str, true).value;
        html = html + preCode;
        if (linesLength) {
          html += '<b class="name">' + lang + "</b>";
        }
        // 将代码包裹在 textarea 中，由于防止textarea渲染出现问题，这里将 "<" 用 "&lt;" 代替，不影响复制功能
        return `<pre class="hljs"><code>${html}</code>${linesNum}</pre><textarea style="position: absolute;top: -9999px;left: -9999px;z-index: -9999;" id="copy${codeIndex}">${str.replace(
          /<\/textarea>/g,
          "&lt;/textarea>"
        )}</textarea>`;
      } catch (error) {
        console.error(error);
      }
    }

    const preCode = md.utils.escapeHtml(str);
    html = html + preCode;
    return `<pre class="hljs"><code>${html}</code>${linesNum}</pre><textarea style="position: absolute;top: -9999px;left: -9999px;z-index: -9999;" id="copy${codeIndex}">${str.replace(
      /<\/textarea>/g,
      "&lt;/textarea>"
    )}</textarea>`;
  },
})
  .use(require("markdown-it-anchor"), {
    level: [1, 2, 3],
    slugify: (s) => uslug(s),
  })
  .use(require("markdown-it-toc-done-right"), {
    containerClass: "toc",
    containerId: "toc",
    level: [1, 2, 3],
    slugify: (s) => uslug(s),
  });

/**
 * 创建一篇文章需要
 *  - 源文件
 *  - 输出目录
 */
class Post {
  constructor(postDir, postName, outputDir) {
    if (!postDir || !postName) {
      throw new Error("create new Post need postDir and postName");
    }
    this.postDir = postDir;
    this.outputDir = outputDir;
    this.postName = postName;
    this._load();
  }
  /**
   * 初始化配置
   */
  _load() {
    const fullPath = path.join(this.postDir, this.postName);
    this.content = fs.readFileSync(fullPath, "utf-8");
    this._readMore();
    this._readFront();
    this._readContent();
  }
  /**
   * 判断是否含有摘要符号
   * <!--more-->
   */
  _readMore() {
    const noFront = this.content.replace(/---\r?\n([\w\W]*)---\r?\n/, "");
    // 判断是否含有摘要符号
    const moreFlag = noFront.indexOf("<!--more-->");
    const moreFlagSpace = noFront.indexOf("<!-- more -->");
    const flag =
      moreFlag === -1 ? (moreFlagSpace === -1 ? -1 : moreFlagSpace) : moreFlag;
    const more = flag !== -1 ? noFront.slice(0, flag) : "";
    this.abstracts = more ? md.render(more) : "";
  }
  /**
   * 解析Markdown文件头部内容
   * ---
    title: tags
    date: 2019-08-13 09:39:50
    type: tags
    layout: tag
    ---
   */
  _readFront() {
    if (this.abstracts) {
      this.front = {
        ...fm(this.content).attributes,
        name: this.postName,
        abstracts: this.abstracts,
      };
      return;
    }
    this.front = {
      ...fm(this.content).attributes,
      name: this.postName,
      abstracts: this.abstracts ?? "",
    };
  }
  /**
   * 解析Markdown文件主体内容
   */
  _readContent() {
    const noFront = this.content.replace(/---\r?\n([\w\W]*)---\r?\n/, "");
    const noMore = noFront
      .replace("<!--more-->", "")
      .replace("<!-- more -->", "");
    this.contentHtml = md.render("${toc}" + noMore);
  }
  /**
   * 根据模板生成html文件（私有方法）
   * @returns
   */
  _render() {
    const html = art.render(this.postTemplate, {
      layout: this.layoutTemplate,
      author: this.config.author,
      description: this.config.description,
      ...this.front,
      codeTheme: this.config.codeTheme,
      sidebar: this.sidebar.sidebarTemplate,
      sidebarData: this.sidebar.sidebarData,
      footer: this.footer.footerTemplate,
      footerData: this.footer.footerData,
      postContent: this.contentHtml,
      friends: this.config.friends || "",
    });
    return html;
  }
  /**
   * 输出到tags目录
   * @param {*} html
   */
  _writeToTags(html) {
    this.front.tags?.forEach((element) => {
      writeFile(
        path.join(
          this.outputDir,
          "tags",
          element || "blog",
          this.postName.replace(".md", ""),
          "index.html"
        ),
        html
      );
    });
  }
  /**
   * 输出到categories目录
   * @param {*} html
   */
  _writeToCategory(html) {
    writeFile(
      path.join(
        this.outputDir,
        "categories",
        this.front.category || "blog",
        this.postName.replace(".md", ""),
        "index.html"
      ),
      html
    );
  }
  _renderItem() {
    const data = {
      ...this.front,
      date: this.front.date.slice(0, this.front.date.indexOf(" ")),
      url: `/categories/${
        this.front.category || "blog"
      }/${this.front.name.replace(".md", "")}`,
    };
    return art.render(this.itemTemplate, data);
  }
  /**
   * 加载配置文件
   * @param {*} config
   * @returns
   */
  loadConfig(config) {
    this.config = config;
    return this;
  }
  /**
   * 加载通用模板
   * @param {*} param0
   * @param {*} hasItem
   * @returns
   */
  loadTemplate({ layoutTemplate, postTemplate, itemTemplate }, hasItem = true) {
    this.layoutTemplate = layoutTemplate;
    this.postTemplate = fs.readFileSync(postTemplate, "utf-8");
    if (hasItem) this.itemTemplate = fs.readFileSync(itemTemplate, "utf-8");
    return this;
  }
  /**
   * 加载侧边栏模板
   * @param {*} param0
   * @returns
   */
  loadSidebar({ sidebarTemplate, sidebarData }) {
    this.sidebar = { sidebarTemplate, sidebarData };
    return this;
  }
  /**
   * 加载尾部模板
   * @param {*} param0
   * @returns
   */
  loadFooter({ footerTemplate, footerData }) {
    this.footer = { footerTemplate, footerData };
    return this;
  }
  /**
   * 根据模板生成html文件（公共方法）
   * @returns
   */
  render() {
    return this._render();
  }
  /**
   * 构建文件输出
   */
  build() {
    if (!this.outputDir) {
      throw new Error("You need set outputDir");
    }
    const postHtml = this._render();
    this._writeToCategory(postHtml);
    this._writeToTags(postHtml);
    return this._renderItem();
  }
}

module.exports = Post;
