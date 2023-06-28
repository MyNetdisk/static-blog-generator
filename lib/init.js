/**
 * 初始化博客命令
 */
const path = require("path");
const fse = require("fs-extra");
const moment = require("moment");

/**
 * 新建博文
 * @param {*} dir init命令行参数
 */
function newPost(dir) {
  // 写入文件内容
  const data = [
    "---",
    "title: hello World",
    "date: " + moment().format("YYYY-MM-DD,HH:mm:ss"),
    "tags: " + "[blog,helloworld]",
    "comment: true",
    "category: " + "welcome",
    "---",
    "# Hello World",
    "Welcome to my blog, this is my first post",
  ].join("\n");
  let file = path.resolve(dir, "source", "_posts", "hello.md"); //第一个文件路径
  fse.outputFileSync(file, data); //同步写入文件
  console.log(
    "Now, initial blog has been created, you can create a new post by typing 'yohe new <postName>' "
  );
}

/**
 * 初始化博客命令
 * @param {*} dir init命令行参数
 */
module.exports = function (dir) {
  dir = dir || ".";
  let tplDir = path.resolve(__dirname, "..", "template"); //模板路径
  fse.copySync(tplDir, path.resolve(dir)); //将模板路径下的文件同步拷贝到当前命令行所在目录
  fse.ensureDirSync(path.resolve(dir, "source", "_extra")); //确保目录存在。如果目录结构不存在
  newPost(dir); //写入第一个博客hello world
};
