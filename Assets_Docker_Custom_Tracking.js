function doGet(e) {
  var action = e.parameter.action;
  var programName = e.parameter.programName;
  var buttonId = e.parameter.buttonId;

  if (action == 'click') {
    recordClick(programName, buttonId); // Call the recordClick function with both parameters
  }

  return ContentService.createTextOutput("Button click recorded successfully.");
}

function recordClick(programName, buttonId) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Clicks"); // Make sure you have a sheet named "Clicks"
  if (!sheet) {
    // Create the sheet if it doesn't exist
    sheet = ss.insertSheet("Clicks");
    sheet.appendRow(["Timestamp", "Program Name", "Button ID"]); // Header row
  }
  sheet.appendRow([new Date(), programName, buttonId]); // Append the new row with timestamp, program name, and button ID
}


function recordClick(programName) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Clicks"); // Make sure you have a sheet named "Clicks"
  if (!sheet) {
    // Create the sheet if it doesn't exist
    sheet = ss.insertSheet("Clicks");
    sheet.appendRow(["Timestamp", "Program Name"]); // Header row
  }
  sheet.appendRow([new Date(), programName]); // Append the new row with timestamp and program name
}
