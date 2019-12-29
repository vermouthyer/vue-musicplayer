const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("api", resolve("src/api"))
      .set("base", resolve("src/base"))
      .set("common", resolve("src/common"))
      .set("components", resolve("src/components"));
  }
};
