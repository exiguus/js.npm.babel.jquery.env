[![tests][tests]][tests-url]
[![coverage][coverage]][coverage-url]
[![maintainability][maintainability]][maintainability-url]

# js.npm.babel.jquery.env
Boilerplate to build tested [npm packages](https://www.npmjs.com/) in [ECMAScript 2015](http://www.ecma-international.org/ecma-262/6.0/) and [jQuery](https://jquery.com/).

![test-run][test-run]

## ECMAScript 2015
ES6 Development Environment includes [Webpack4](https://webpack.js.org/), [Babel](https://babeljs.io/), and [Jasmine](https://jasmine.github.io/).

## Development

### Webpack4
Run Webpack4 in development mode with babel-loader ECMA2015 support.

```
npm run dev
```

Runs [Webpack4](https://webpack.js.org/) with webpack-dev-server and babel-loader on port 8080 and bundle `src/index.js` in `src/index.html`. Also starts [Karma](https://karma-runner.github.io/)/[Jasmine](https://jasmine.github.io/) Unit tests in development mode.

Also runs the [Karma](https://karma-runner.github.io/)/[Jasmine](https://jasmine.github.io/) test in development mode:

```
npm run dev-karma
```

Note: Node Version must be greater or equal to Version 6 because of Webpack4.

#### Jasmine
Run Karma/Jasmine test with [Webpack4](https://webpack.js.org/)/babel-loader and [PhantomJS](http://phantomjs.org/) and generate a Coverage report with [Istanbul](https://istanbul.js.org/) in `coverage/es6/`.

Run the [Karma](https://karma-runner.github.io/)/[Jasmine](https://jasmine.github.io/) test in single-run mode for CI:

```
npm run test-jasmine-coverage
```

----
### jQuery
[jQuery](https://jquery.com/) Development Environment includes [Grunt](https://gruntjs.com/) and [QUnit](https://qunitjs.com/).

```
open src/index.jquery.html
```

#### Qunit
Run [Karma](https://karma-runner.github.io/)/[QUnit](https://qunitjs.com/) test with [PhantomJS](http://phantomjs.org/) and generate a Coverage report with [Istanbul](https://istanbul.js.org/) in `coverage/jquery/`.


Run the [Karma](https://karma-runner.github.io/)/[QUnit](https://qunitjs.com/) test in single-run mode for CI:

```
npm run test-qunit-coverage
```

#### Qunit integration tests

Run `node-qunit-phantomjs` against the `dist` folder:

```
npm run test-qunit && npm run test-qunit-min
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
Run [QUnit](https://qunitjs.com/) and [Jasmine](https://jasmine.github.io/) Unit and Integration Tests in production mode for CI:

```
npm test
```

Run `npm run build` and test ES6 class/modules in `src/js/*.test.js` and jQuery Plugins in `src/index.jquery.test.html` or `src/index.jquery.min.test.html`, generate Coverage Reports and Documentation.

Take a look at the [Karma](https://karma-runner.github.io/) configuration at `karma.jquery.config.js` or `karma.es6.config.js` and into `src/index.jquery.test.html`or `src/index.jquery.test.min.html`

Note: `npm run dist` must run before the CI tests are running.

## Dist
Run [Grunt](https://gruntjs.com/) Build Tasks for `dist/`.

```
npm run dist
```

Clean, Copy, Uglify and Usebanner from `src/js/` to `build/` and generate `docs` with [JSDoc](http://usejsdoc.org/) and [Istanbul](https://istanbul.js.org/).

See `build/helper/_grunt/` for all tasks.

Take a look into `build/helper/config.js` to setup config variables or the usebanner.
Also `Gruntfile.js` and `build/helper/_grunt/` may be interesting.

Note: [Grunt](https://gruntjs.com/) use [jit](https://www.npmjs.com/package/jit-grunt) to load [Grunt](https://gruntjs.com/) Tasks.

## CI
Continuous integration is preconfigured with Travis-CI in `.travis.yml` running within a `node` environment.

Maintainability and Coverage Reports are integrated with Code Climate (See `.codeclimate.yml`).

## ESLint
ESLint `eslint:recommanded` is extended with [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html) and preconfigured for [QUnit](https://qunitjs.com/), [Jasmine](https://jasmine.github.io/), [jQuery](https://jquery.com/), es6, node and browser env.  

## JSDoc
[JSDoc](http://usejsdoc.org/) documention is generated with the standard Build in `docs/` and available at https://exiguus.github.io/js.npm.babel.jquery.env/


## Istanbul
[Istanbul](https://istanbul.js.org/) Coverage Reports (HTML, Icov, teamcity, cobertura and text) are generated during the test phase in `coverage/` and will be copied to `docs/coverage/`. The `Icov.info` report is used with Code Climate `cc-test-report` in `travis.yml`. The Reports are available at https://exiguus.github.io/js.npm.babel.jquery.env/coverage/es6/ and https://exiguus.github.io/js.npm.babel.jquery.env/coverage/jquery/

## Babel
[Babel](https://babeljs.io/) is running in env mode for ECMA2015 and [Webpack4](https://webpack.js.org/)

## Karma
[Karma](https://karma-runner.github.io/) test runner run Qunit and Jasmine Unit Tests and generate [Istanbul](https://istanbul.js.org/) Coverage Reports in `coverage/`


[tests]: https://img.shields.io/travis/exiguus/js.npm.babel.jquery.env/master.svg
[tests-url]: https://travis-ci.org/exiguus/js.npm.babel.jquery.env

[maintainability]:
https://api.codeclimate.com/v1/badges/062e90f36125daa7d8ee/maintainability
[maintainability-url]:
https://codeclimate.com/github/exiguus/js.npm.babel.jquery.env/maintainability

[coverage]:
https://api.codeclimate.com/v1/badges/062e90f36125daa7d8ee/test_coverage
[coverage-url]:
https://codeclimate.com/github/exiguus/js.npm.babel.jquery.env/test_coverage

[test-run]: https://exiguus.github.io/js.npm.babel.jquery.env/static/js.npm.babel.jquery.env.tests.gif
