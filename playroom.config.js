module.exports = {
  components: './src/Components/index.ts',
  outputPath: './build/playroom',
  frameComponent: './src/Components/FrameComponent.tsx',
  webpackConfig: () => ({
      resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            use: ['babel-loader', 'source-map-loader'],
            exclude: /node_modules/
          },
          {
            test: /\.tsx?$/,
            use: ['babel-loader', 'awesome-typescript-loader']
          },
        ]
      }  
  }),
  typeScriptFiles: [
    './src/Components/*.{ts,tsx}',
    '!**/node_modules'
  ]
};
