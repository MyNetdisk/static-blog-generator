/**
 * 清理文件命令
 */
const fse = require("fs-extra");

/**
 * 清理当前对应文件
 */
module.exports = function (options) {
  fse.removeSync(options.dir ?? "build");
  console.log("清理成功！");
};
