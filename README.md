[![tests][tests]][tests-url]

# js.npm.babel.jquery.env
Boiler Plate to build tested [npm packages](https://www.npmjs.com/) in [ECMAScript 2015](http://www.ecma-international.org/ecma-262/6.0/) and [jQuery](https://jquery.com/).

## ECMAScript 2015
ES6 Development Environment includes [Webpack4](https://webpack.js.org/), [Babel](https://babeljs.io/), and [Jasmine](https://jasmine.github.io/).

## Development
### Webpack4
Run Webpack4 in development mode with babel-loader ECMA2015 support.

```
npm run dev
```
Runs [Webpack4](https://webpack.js.org/) with webpack-dev-server and babel-loader on port 8080 and bundle `src/index.js` in `src/index.html`. Also starts [Karma](https://karma-runner.github.io/)/[Jasmine](https://jasmine.github.io/) Unit tests in development mode.

Note: Node Version must be greater or equal to Version 6 because of Webpack4.

#### Jasmine
Run Karma/Jasmine test with [Webpack4](https://webpack.js.org/)/babel-loader and [PhantomJS](http://phantomjs.org/).
Run the [Karma](https://karma-runner.github.io/)/[Jasmine](https://jasmine.github.io/) test in single-run mode for CI:
```
npm run test-karma
```
Runs the [Karma](https://karma-runner.github.io/)/[Jasmine](https://jasmine.github.io/) test in development mode:
```
npm run dev-karma
```
### jQuery
[jQuery](https://jquery.com/) Development Environment includes [Grunt](https://gruntjs.com/) and [QUnit](https://qunitjs.com/).
```
open src/index.jquery.html
```

#### Qunit
Run [QUnit](https://qunitjs.com/) test with [PhantomJS](http://phantomjs.org/) for CI:
```
npm run test-qunit
```
Run [QUnit](https://qunitjs.com/) test in development:
```
open src/index.jquery.test.html
```
or against the uglify version
```
open src/index.jquery.test.min.html
```

## Test
Run [QUnit](https://qunitjs.com/) and [Karma](https://karma-runner.github.io/)/[Jasmine](https://jasmine.github.io/) test in production mode for CI:
```
npm run test
```
Test ES6 class/modules in `src/js/*.test.js` and jQuery Plugins in `src/index.jquery.test.html` or `src/index.jquery.min.test.html`.

Take a look at the Karma configuration at `karma.conf.js`and into `src/index.jquery.test.html`or `src/index.jquery.test.min.html`

Note: `npm run dist` must run before the CI tests are running.

## Dist
Run [Grunt](https://gruntjs.com/) Build Tasks for `dist/`.
```
npm run dist
```
Clean, Copy, Uglify and Usebanner from `src/js/` to `build/`.

Take a look into `build/helper/config.js` to setup config variables or the usebanner.
Also `Gruntfile.js` and `build/helper/_grunt/` may be interesting.

Note: [Grunt](https://gruntjs.com/) use [jit](https://www.npmjs.com/package/jit-grunt) to load [Grunt](https://gruntjs.com/) Tasks.

## CI
Continuous integration is preconfigured with Travis-CI in `.travis.yml` running within a `node` environment and with all necessary `npm install -g`for [PhantomJS](http://phantomjs.org/), webpack-ci etc.

## ESLint
ESLint is extended with [Standard JS](https://standardjs.com/) and preconfigured for [QUnit](https://qunitjs.com/), Jasmine and node.  

## Babel
[Babel](https://babeljs.io/) is runs in env mode for ECMA2015 and [Webpack4](https://webpack.js.org/)

## npm
[np](https://github.com/sindresorhus/np) is a better `npm publish`

# Git
* tag releases with `package.json` version

[tests]: https://img.shields.io/travis/exiguus/js.npm.babel.jquery.env/master.svg
[tests-url]: https://travis-ci.org/exiguus/js.npm.babel.jquery.env
