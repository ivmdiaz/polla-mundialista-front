function getJsonDailyScores(doc) {

  var sheet = doc.getSheetByName("daily-scores");
  var values = sheet.getRange(1, 1, sheet.getLastRow(), sheet.getLastColumn()).getValues();

  var jsonObject = { data: [] };
  for(var i = 3; i < values.length; i++ ) {

    var jsonItem = {
      id: values[i][0],
      group: values[i][1],
      date: values[i][2],
      team_1: {
        id: values[i][4],
        name: values[i][5],
      },
      team_2: {
        id: values[i][7],
        name: values[i][8],
      },
      result_team_1: values[i][values[i].length - 2],
      result_team_2: values[i][values[i].length - 1],
      scores: []
    }

    for(var j = 9; j < values[i].length - 3; j++ ) {

      var value_team_1 = values[i][j].substring(0,1);
      var value_team_2 = values[i][j].substring(2, values[i][j].length);

      jsonItem.scores.push({
          score_team_1: value_team_1,
          score_team_2: value_team_2,
          player: {
            name: values[0][j],
            id: values[1][j],
            image: values[2][j]
          }
      })
    }

    console.log(jsonItem)
    jsonObject.data.push(jsonItem);
  }

  return JSON.stringify(jsonObject);

}
