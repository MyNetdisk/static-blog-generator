/**
 * 新建其他非博文页面
 */
const fse = require("fs-extra");
const path = require("path");
const moment = require("moment");

/**
 * 新建其他非博文页面
 * @param {*} name 文件名
 */
module.exports = function (name) {
  // 写入文件内容
  const data = [
    "---",
    `title: ${name}`,
    "date: " + moment().format("YYYY-MM-DD,HH:mm:ss"),
    "layout: about",
    "comment: true",
    "---",
    "",
  ].join("\n");
  let file = path.resolve("source", "_extra", `${name}.md`); //写入文件名路径
  fse.outputFileSync(file, data); //同步写入文件
  console.log(
    `create new page ${name} sucessfully! Go to edit file source/_extra/${name}.md`
  );
};
