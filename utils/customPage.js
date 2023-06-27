/**
 * 自定义页面类
 */
const fs = require("fs-extra");
const path = require("path");
const moment = require("moment");

class CustomPage extends Page {
  constructor(mdDir, pageConfig) {
    super(mdDir, pageConfig);
  }
}

module.exports = CustomPage;
