function getJsonRanking(doc) {

  var sheet = doc.getSheetByName("ranking");

  var count_rows = sheet.getLastRow() - 50;
  var count_columns = sheet.getLastColumn() - 8;

  var range = sheet.getRange(51, 9, count_rows, count_columns);
  var values =  range.getValues();

  var jsonObject = { data:[]}

  for (var j = 0; j < count_columns; j++) {

      jsonObject.data.push({
        points: values[0][j],
        player: {
          id: values[1][j],
          name: values[2][j],
          image: values[3][j]
        }
      })
  }

  return JSON.stringify(jsonObject);

}
