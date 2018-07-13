/* eslint-disable import/no-extraneous-dependencies */

import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';

import { dependencies, peerDependencies } from '../../package.json';
import styles from './plugins/styles';

const paths = require('../paths');

const externalPackages = [...Object.keys(dependencies), ...Object.keys(peerDependencies)];

const env = process.env.NODE_ENV || 'development';
const isProduction = env === 'production';

export default {
  input: paths.entry,
  output: [
    {
      file: paths.buildIndex,
      format: 'cjs',
      sourcemap: isProduction
    },
    {
      file: paths.buildModule,
      format: 'es',
      sourcemap: isProduction
    }
  ],
  external: externalPackages,
  plugins: [
    nodeResolve(),
    babel({
      include: '**/*.js',
      exclude: 'node_modules/**',
      plugins: isProduction ? ['@babel/plugin-external-helpers'] : [],
      externalHelpers: isProduction
    }),
    commonjs(),
    styles({
      output: paths.buildCss,
      includePaths: [paths.styleRoot],
      minifyClassnames: isProduction,
      sourceMap: isProduction
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(env)
    })
  ]
};
