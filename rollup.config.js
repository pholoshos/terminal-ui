// rollup.config.js
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

import packageJson from './package.json';

export default {
  input: 'src/index.js',  // Entry point of your library
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      extract: true,
      minimize: true,
    }),
    terser(),
  ],
};
