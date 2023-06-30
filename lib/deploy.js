const { execSync } = require("child_process");
const moment = require("moment");
const path = require("path");

module.exports = (options) => {
  const dir = options?.dir ?? "build";
  const siteConfig = require(path.resolve("site.config.json"));
  let { username, repo, branch } = siteConfig.deploy;
  try {
    execSync(`git init ${dir}`, { encoding: "utf-8" });
    const addRes = execSync(`cd ${dir}& git add . `, { encoding: "utf-8" });
    const commitMessage = `update by ${username}: ${moment().format(
      "YYYY-MM-DD HH:mm:ss"
    )}`;
    console.log("===addRes===", addRes);
    if (addRes) {
      console.log("===addRes1111===", addRes);
    }
    // execSync(`cd ${dir}& git commit -m "${commitMessage}"`, {
    //   encoding: "utf-8",
    // });
    // execSync(
    //   `git remote add origin https://github.com/${username}/${username}.github.io.git`
    // );
    if (repo) {
      const result = execSync(
        `cd ${dir}& git push -f git@github.com:${username}/${repo}.git ${branch}:gh-pages`
      );
      console.log(result);
      return;
    }
    const result = execSync(
      `cd ${dir}& git push -f https://github.com/${username}/${username}.github.io.git ${branch}`
    );
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
