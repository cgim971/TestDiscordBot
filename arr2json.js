const fs = require('fs');

let stringValue;
let arr;

const arr2json = function () {

    stringValue = fs.readFileSync('./excelData.json').toString();

    stringValue = stringValue.replaceAll(',', '');

    console.log(stringValue);

}

exports.arr2json = arr2json;