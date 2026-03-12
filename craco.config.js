const CracoLessPlugin = require('craco-less');

const path = require('path');

const resolve = pathname => path.resolve(__dirname, pathname);

module.exports = {
  // 配置webpack别名
  webpack: {
    alias: {
      '@': resolve('src'),
      'utils': resolve('src/utils'),
      'components': resolve('src/components'),
      // '@mui/styled-engine': '@mui/styled-engine-sc'
    },
  },
  // 配置less
  plugins: [
    {
      plugin: CracoLessPlugin,
    },
  ]
};
