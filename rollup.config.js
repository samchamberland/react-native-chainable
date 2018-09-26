import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sourceMaps from 'rollup-plugin-sourcemaps';

export default {
  input: 'compiled/index.js',
  output: {
    file: 'dist/react-native-chainable.js',
    format: 'umd',
    name: 'react-native-chainable',
    globals: {
      react: 'react',
      'react-native': 'reactNative',
    },
    sourcemap: true,
    exports: 'named',
  },
  plugins: [resolve(), commonjs(), sourceMaps()],
  external: ['react'],
};
