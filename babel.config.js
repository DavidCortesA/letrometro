module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
  ],
  plugins: [
    'babel-plugin-transform-import-meta',
    '@babel/plugin-transform-class-properties',
    '@babel/plugin-transform-runtime',
  ],
};
