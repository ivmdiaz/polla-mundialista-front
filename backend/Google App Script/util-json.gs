function getDataFromTable(sheet, rows, columns) {
  var range = sheet.getRange(rows, columns, sheet.getLastRow() - 1, sheet.getLastColumn());
  return range.getValues();
}
