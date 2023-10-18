const yaml = require('js-yaml');
const {DateTime} = require('luxon');
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const eleventyDirectoryOutput = require('@11ty/eleventy-plugin-directory-output');

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./tailwind.config.js');
  eleventyConfig.addWatchTarget('./tailwind.css');
  eleventyConfig.setQuietMode(true);
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addDataExtension('yaml', contents => yaml.load(contents))
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(eleventyDirectoryOutput, {
    columns: {
      filesize: true,
      benchmark: true,
    },
    warningFileSize: 400 * 1000,
  });
  eleventyConfig.addFilter('simpleDate', dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('LLL dd, yyyy')
  });
  eleventyConfig.addFilter('where', (arr, key, value) => {
    return arr.filter(item => item[key] === value)[0];
  });
  return {
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist',
      layouts: '_layouts'
    }
  }
}