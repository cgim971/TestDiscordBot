const excelToJson = require('convert-excel-to-json');
const fs = require('fs');
const { arr2json } = require('./arr2json.js');

const excelParser = function () {
    let date = new Date();

    const result = excelToJson({
        sourceFile: '4.xlsx'
    });

    fs.writeFileSync('./excelData.json', JSON.stringify(result));

    arr2json();
}

exports.excelParser = excelParser;