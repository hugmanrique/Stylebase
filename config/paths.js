const { realpathSync } = require('fs');
const { dirname, resolve } = require('path');

const pkg = require('../package.json');

const appDirectory = realpathSync(process.cwd());
const resolveApp = relativePath => resolve(appDirectory, relativePath);

module.exports = {
  entry: resolveApp('src/index.js'),
  build: resolveApp(dirname(pkg.main)),
  buildIndex: resolveApp(pkg.main),
  buildModule: resolveApp(pkg.module),
  buildCss: resolveApp('dist/styles.css'),
  styleRoot: resolveApp('styles/')
};
