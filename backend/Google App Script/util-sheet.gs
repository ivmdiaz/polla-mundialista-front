function CALCULATE_SCORE(results_player, result_team_1, result_team_2) {

  var value_team_1 = results_player.substring(0,1);
  var value_team_2 = results_player.substring(2, results_player.length);

  var score = 0;
  //check the match is over
  if( result_team_1.length == 0 || result_team_2.length == 0) {
    score = "";
  }
  //check max points
  else if(value_team_1 == result_team_1 && value_team_2 == result_team_2) {
    score = 5;
  }

  //check a tie
  else if(value_team_1 == value_team_2 && result_team_1 == result_team_2) {
    score = 3;
  }

  //check winer team
  else if((value_team_1 > value_team_2 && result_team_1 > result_team_2) || (value_team_2 > value_team_1 && result_team_2 > result_team_1)) {
    score = 3;
  }

  return score;

}

function GET_TODAY_MATCHES_PLAYERS() {

  var doc = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = doc.getSheetByName("matches_players");
  var values = getDataFromTable(sheet, 2, 1);

  //get today matches
  let matchesToday = values.filter( item => {
    let result = null;

    let itemDate = new Date(item[2]);
    itemDate.setHours(0, 0, 0, 0);

    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    if(itemDate.getTime() == currentDate.getTime()) {
      result = item;
    }

    return result;
  });

  return matchesToday;

}

function GET_PLAYERS_VERTICAL() {

  var doc = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = doc.getSheetByName("players_db");
  var values = sheet.getRange(2, 1, sheet.getLastRow(), sheet.getLastColumn()).getValues()
  return values;
}

function GET_PLAYERS_HORIZONTAL(onlyname) {

  var doc = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = doc.getSheetByName("players_db");
  var values = sheet.getRange(2, 1, sheet.getLastRow(), sheet.getLastColumn()).getValues();

  //create response:
  var result = [...Array(onlyname ? 1 : values[0].length)].map(() => [])
  for (var i = 0; i < values.length; i++) {
    for (var j = 0; j < values[i].length; j++) {

      if(onlyname == true && j > 0) {
        continue;
      }
      else {
        result[j][i] = values[i][j];
      }
    }
  }

  return result;
}

