/**
 * 清理文件命令
 */
const fse = require("fs-extra");

/**
 * 清理当前对应文件
 */
module.exports = function () {
  fse.removeSync("source");
  fse.removeSync("public");
  fse.removeSync("themes");
  fse.removeSync("config.json");
  console.log("clean the dir successfully!");
};
