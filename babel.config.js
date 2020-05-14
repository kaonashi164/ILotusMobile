module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@icons': './src/assets/icons',
          '@images': './src/assets/img',
          '@constants': './src/constants',
          '@components': './src/components',
          '@screen': './src/screen',
          '@utils': './src/utils',
          '@navigation': './src/navigation',
          '@types': './src/types',
          '@provider': './src/provider',
          '@redux': './src/redux',
          '@context': './src/context',
          '@theme': './src/theme',
          '@env': './src/environment',
        },
      },
    ],
  ],
}
