/**
 * 文章类
 */
const fs = require("fs-extra");
const path = require("path");
const ejs = require("ejs");

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
  }
}

module.exports = Post;
