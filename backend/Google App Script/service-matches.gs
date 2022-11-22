function getJsonMatches(doc) {

  var sheet = doc.getSheetByName("matches");
  var values = getDataFromTable(sheet, 2, 1);

  var jsonObject = { data:[], timestamp: new Date()}

  for(var row in values) {
    var value = values[row];
    jsonObject.data.push({
      id: value[0],
      group: value[1],
      date: value[2],
      team_1: {
        id: value[3],
        name: value[4]
      },
      team_2: {
        id: value[6],
        name: value[7]
      },
      result_team_1: value[8],
      result_team_2: value[9]
    })
  }

  return JSON.stringify(jsonObject);

}
