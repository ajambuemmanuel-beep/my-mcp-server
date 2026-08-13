export default {
  mode: 'production',
  target: 'node',

  entry: './server.js',

  output: {
    filename: 'bundle.js',
    path: new URL('./dist/', import.meta.url).pathname,
    clean: true
  },

  optimization: {
    minimize: false
  },

  resolve: {
    extensions: ['.js', '.json']
  },

  externals: {
    '@modelcontextprotocol/sdk': 'commonjs @modelcontextprotocol/sdk'
  }
};
