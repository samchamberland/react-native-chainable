import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

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
    exports: 'named',
  },
  plugins: [resolve(), commonjs()],
  external: ['react'],
};
