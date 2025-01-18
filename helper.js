const xlsx = require('xlsx');

function generateJSONFromExcel(agrs) {
    const wb = xlsx.readFile(agrs.excelFilePath); 
    const ws = wb.Sheets[agrs.sheetName];
    return xlsx.utils.sheet_to_json(ws, { raw: false });
}

module.exports = { generateJSONFromExcel };

