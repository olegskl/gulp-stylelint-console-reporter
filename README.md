# gulp-stylelint

[![Build Status](https://travis-ci.org/olegskl/gulp-stylelint-console-reporter.svg?branch=master)](https://travis-ci.org/olegskl/gulp-stylelint-console-reporter)
[![Code Climate](https://codeclimate.com/github/olegskl/gulp-stylelint-console-reporter/badges/gpa.svg)](https://codeclimate.com/github/olegskl/gulp-stylelint-console-reporter)

A [gulp-stylelint](https://github.com/olegskl/gulp-stylelint) reporter to display [stylelint](https://github.com/stylelint/stylelint) results in console.

## Installation

```bash
npm install gulp-stylelint-console-reporter --save-dev
```

## Quick start

With gulp-stylelint, it's easy to generate CSS lint reports based on [stylelint](https://github.com/stylelint/stylelint) results.

```js
import consoleReporter from 'gulp-stylelint-console-reporter';

gulp.task('lint-css', function lintCssTask() {
  return gulp
    .src('src/**/*.css')
    .pipe(gulpStylelint({
      reporters: [
        consoleReporter()
      ]
    }));
});
```

## License

http://opensource.org/licenses/mit-license.html
