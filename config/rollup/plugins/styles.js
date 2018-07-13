/* eslint-disable import/no-extraneous-dependencies */

import postcss from 'rollup-plugin-postcss';
// import postcssUrl from 'postcss-url';

export default ({ output, includePaths, minifyClassnames = false, sourceMap = false } = {}) =>
  postcss({
    modules: true,
    extract: output,
    extensions: ['.css', '.scss'],
    minimize: minifyClassnames,
    namedExports: true,
    sourceMap,
    use: [
      [
        'sass',
        {
          includePaths
        }
      ]
    ]
  });
