'use strict';

const fs = require('fs');
const FILE_OPTIONS = { encoding: 'utf8' };

const jsFileNamesWithoutExtension = [
    'current-weather',
    'current-weather-loading'
];

jsFileNamesWithoutExtension.forEach(jsFileNameWithoutExtension => {
    const jsFilePath = `./dist/${jsFileNameWithoutExtension}.js`;
    const cssContents = fs.readFileSync(`./dist/${jsFileNameWithoutExtension}.css`, FILE_OPTIONS);
    const jsContents = fs.readFileSync(jsFilePath, FILE_OPTIONS);

    console.log(`replacing css in ${jsFilePath}`);

    const scrubbedcssContents = cssContents
        .replace(/\n/g, '\\n')
        .replace(/"/g, '\\"')
        .replace(/\$/g, '\$');

    const replaceTextRegex = new RegExp(`{{${jsFileNameWithoutExtension}.scss}}`);
    const updatedJs = jsContents.replace(replaceTextRegex, scrubbedcssContents);

    fs.writeFileSync(jsFilePath, updatedJs, FILE_OPTIONS);
});