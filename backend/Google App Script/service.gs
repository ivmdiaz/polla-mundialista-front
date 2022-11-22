function setup() {
  var doc = SpreadsheetApp.getActiveSpreadsheet();
  PropertiesService.getScriptProperties().setProperty("key", doc.getId());
}

function doGet(e) {

  var doc = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty("key")) ;

  if(e == null) {
    e = { parameter: { service: 'daily-scores' }};
  }

  switch(e.parameter.service) {
    case "ranking":
      var data = getJsonRanking(doc);
      return ContentService.createTextOutput(data).setMimeType(ContentService.MimeType.JSON);
    case "matches":
      var data = getJsonMatches(doc);
      return ContentService.createTextOutput(data).setMimeType(ContentService.MimeType.JSON);
    case "daily-scores":
      var data = getJsonDailyScores(doc);
      return ContentService.createTextOutput(data).setMimeType(ContentService.MimeType.JSON);

  }

}






