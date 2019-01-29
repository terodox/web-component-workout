'use strict';

const fs = require('fs');
const JS_FILE_PATH = './dist/current-weather.js'
const FILE_OPTIONS = { encoding: 'utf8' };
const cssContents = fs.readFileSync('./dist/current-weather.css', FILE_OPTIONS);
const jsContents = fs.readFileSync(JS_FILE_PATH, FILE_OPTIONS);

const scrubbedcssContents = cssContents
    .replace(/\n/g, '\\n')
    .replace(/"/g, '\\"')
    .replace(/\$/g, '\$');

const updatedJs = jsContents.replace(/{{current-weather.scss}}/, scrubbedcssContents);

fs.writeFileSync(JS_FILE_PATH, updatedJs, FILE_OPTIONS);