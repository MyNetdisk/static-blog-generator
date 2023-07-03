const { execSync } = require("child_process");
const moment = require("moment");
const path = require("path");

module.exports = (options) => {
  const dir = options?.dir ?? "build";
  const siteConfig = require(path.resolve("site.config.json"));
  let { username, repo, branch } = siteConfig.deploy;
  try {
    execSync(`npm run build`);
    execSync(`git init ${dir}`, { encoding: "utf-8" });
    const addRes = execSync(`cd ${dir} & git add .`);
    const commitMessage = `update by MyNetdisk: ${moment().format(
      "YYYY-MM-DD HH:mm:ss"
    )}`;
    if (addRes) {
      execSync(`cd ${dir}& git commit -m "${commitMessage}"`, {
        encoding: "utf-8",
      });
    }
    if (repo) {
      const result = execSync(
        `cd ${dir} & git push -f git@github.com:${username}/${repo}.git ${branch}:gh-pages`
      );
      console.log(result);
      return;
    }
    const result = execSync(
      `cd ${dir} & git push -f git@github.com:${username}/${username}.github.io.git ${branch}`
    );
    console.log(result);
    execSync(`npm run clean`);
  } catch (error) {
    console.log(error);
    execSync(`npm run clean`);
  }
};
