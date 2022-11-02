const browserslist = require('browserslist');
const caniuse = require('caniuse-api');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const JsonInSassImporter = require('node-sass-json-importer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OpenBrowserPlugin = require('open-browser-plugin');
const path = require('path');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const sass = require('sass');
const StylelintPlugin = require('stylelint-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { v5: uuid } = require('uuid');

// Globals
const isProduction = process.env.NODE_ENV === 'production';
const isServe = process.env.NODE_ENV === 'serve';
const mode = isProduction ? 'production' : 'development';
const packageJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'package.json')));
const packageVersion = packageJson?.version ?? 'unknown';

// webpack PlugIns with condition
const openBrowser = isServe ? [new OpenBrowserPlugin({ port: 1313 })] : [];

// Browserslist & related ECMAscript version
const getSupportedBrowsers = () => browserslist();
const getEcmaScriptVersion = (browsers) => {
  const cond = !caniuse.isSupported('arrow-functions', browsers ?? [])
    || !caniuse.isSupported('es6-class', browsers ?? []);
  return cond ? 5 : 6;
}
const supportedBrowsers = getSupportedBrowsers();
const ecmaScriptVersion = getEcmaScriptVersion(supportedBrowsers);

const getAllScriptEntries = () => {
  const scriptPath = './src/script/';
  return fs
    .readdirSync(scriptPath)
    .filter((fileAndFolders) => fileAndFolders.includes('.ts'))
    .map((tsFile) => tsFile.replace('.ts', ''))
    .map((entryName) => ({ [entryName]: [`${scriptPath}${entryName}.ts`] }))
    .reduce((a, b) => ({ ...a, ...b }), {});
};

const getAllStyleEntries = () => {
  const stylePath = './src/style/';
  return fs
    .readdirSync(stylePath)
    .filter((fileAndFolders) => fileAndFolders.includes('.scss'))
    .filter((scssFile) => !scssFile.startsWith('_'))
    .map((scssFile) => scssFile.replace('.scss', ''))
    .map((entryName) => ({ [entryName]: [`${stylePath}${entryName}.scss`] }))
    .reduce((a, b) => ({ ...a, ...b }), {});
};

module.exports = {
  mode,

  entry: {
    ...getAllScriptEntries(),
    ...getAllStyleEntries(),
  },

  resolve: {
    extensions: ['.js', '.ts', '.json', '.css', '.scss'],
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist', 'style-guide'),
    publicPath: '',
    library: {
      name: 'StyleGuide',
      type: 'umd',
    },
    clean: true,
    assetModuleFilename: 'images/[name][ext][query]'
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ],
      },

      {
        test: /\.scss$/i,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: sass,
              webpackImporter: false,
              sassOptions: {
                importer: JsonInSassImporter()
              }
            }
          },
        ],
      },

      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },

      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            // disable type checker - we will use it in fork plugin
            transpileOnly: true
          }
        }
      },

      {
        test: /\.(jpg|jpeg|jpe|gif|png|svg)$/i,
        type: 'asset/resource',
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext][query]'
        }
      },
    ],
  },

  plugins: [
    /**
     * Lint scripts
     */
    new ESLintPlugin({
      extensions: ['.tsx', '.ts', '.js'],
      exclude: 'node_modules'
    }),

    /**
     * Faster TypeScript type checker
     */
    new ForkTsCheckerWebpackPlugin(),

    /**
     * Exclude Styles to CSS files
     */
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),

    /**
     * Remove all empty JS files from dist folder, where created be (S)CSS files
     */
    new RemoveEmptyScriptsPlugin(),

    /**
     * Lint styles
     */
    new StylelintPlugin(),

    /**
     * Open the browser with hugo if serve mode runs
     */
    ...openBrowser
  ],

  watchOptions: {
    /**
     * Stop watching on docu folder, this is the job for hugo
     */
    ignored: ['**/docu'],
  },

  optimization: {
    minimize: true,

    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ie8: false,
          keep_classnames: false,
          keep_fnames: false,
          ecma: ecmaScriptVersion,
          safari10: supportedBrowsers.some((browser) => browser.includes('safari 10') || browser.includes('ios_saf 10'))
        }
      }),
  
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: ['default']
        }
      })
    ]
  }
};
