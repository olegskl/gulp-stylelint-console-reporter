/**
 * gulp-stylelint console reporter.
 * @module gulp-stylelint-console-reporter
 */

import gulpUtil from 'gulp-util';

/**
 * Logs an issue to the console.
 * @param  {Object}    message Stylelint message.
 * @return {undefined}         Nothing is returned.
 */
function consoleMessageReporter(message) {
  const errorCoords = gulpUtil.colors.gray(`${message.line}:${message.column}`);
  const errorNotice = message.severity === 'error' ?
    gulpUtil.colors.red('error') :
    gulpUtil.colors.yellow('warning');

  gulpUtil.log(`${errorCoords} ${errorNotice} ${message.text}`);
}

/**
 * Logs a Stylelint result source and all its messages.
 * @param  {Object}    result Stylelint result.
 * @return {undefined}        Nothing is returned.
 */
function consoleResultReporter(result) {
  gulpUtil.log(gulpUtil.colors.underline(result.opts.from));
  result.messages
    .filter(message => message.plugin === 'stylelint')
    .forEach(consoleMessageReporter);
}

/**
 * Reporter initialization function.
 * @return {Function} Reporter function.
 */
export default function gulpStylelintConsoleReporterInit() {

  /**
   * Takes a list of Stylelint results and outputs them to the console.
   * @param  {Array<Object>} resultList Stylelint result list.
   * @return {undefined}                Nothing is returned.
   */
  return function gulpStylelintConsoleReporter(resultList) {
    resultList
      .filter(result => result.messages.length > 0)
      .forEach(consoleResultReporter);
  };
}
