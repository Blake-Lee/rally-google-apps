//Replace with tasks you use most often.
function getDefaultTasks(){

return ['Code Change',
        'Code Change Review',
        'Code Change Shadow',
        'Design Collaboration',
        'Service Change',
        'Service Change Review',
        'Manual Testing',
        'Test Planning',
        'Test Case Review',
        'Automation',
        'Automation Review',
        'Dev/QA/Automation Sync up',
        'Dev/Automation Sync up',
        'Dev/QA Sync up',
        'Land changes and update release doc'

       ];
}



// Use this code for Google Docs, Forms, or new Sheets.
function onOpen() {
 SpreadsheetApp.getUi()
     .createMenu('Rally')
     .addItem('New User Story', 'openNewUserStory')
     .addItem('Edit User Story', 'openEditUserStory')
     .addToUi();
}

function openNewUserStory() {
 var html = HtmlService.createHtmlOutputFromFile('newUS')
     .setSandboxMode(HtmlService.SandboxMode.IFRAME).setTitle("Create new User Story");

 SpreadsheetApp.getUi()
     .showSidebar(html);
}


function openEditUserStory() {
 var html = HtmlService.createHtmlOutputFromFile('editUS')
     .setSandboxMode(HtmlService.SandboxMode.IFRAME).setTitle("Edit this User Story");

 SpreadsheetApp.getUi()
     .showSidebar(html);
}


function newUserStory(form){
 SpreadsheetApp.getActiveSpreadsheet().insertSheet(form.name, SpreadsheetApp.getActiveSpreadsheet().getNumSheets());
 var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(form.name);
 var header = sheet.getRange(1, 1, 1, 6);
   sheet.hideColumns(2);
  sheet.hideColumns(5);
   sheet.setColumnWidth(4, 300);
  sheet.setColumnWidth(6,200);

 var values = [
   ['Estimate','To Do'	,'Work Product'	,'Name','Description','Owner'],
 ];

   header.setValues(values);
   header.setFontWeight("bold");

   var tem_row = sheet.getRange(2,1,1,6);

    values = [
   [ '1', '', '=hyperlink\(\"https://rally1.rallydev.com/#/search?keywords=' + form.id + '\",\"' + form.id + '\"\)', '', '', form.owner]
 ];

 tem_row.setValues(values);

}





function editUserStory(form){
 var rownum = getFirstEmptyRow();
 var tasks = getDefaultTasks();
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var templatevalues =  sheet.getRange(2, 1, 1, 6).getValues();


 for(var i = 0; i < tasks.length; i ++){
   if(form[tasks[i]] == 'on'){
     var newrange = sheet.getRange(rownum, 1, 1, 6);
     templatevalues[0][3] = tasks[i];
     newrange.setValues(templatevalues);
     rownum++;
   }

 }

 sheet.deleteRow(2);


}


function getFirstEmptyRow() {
 var spr = SpreadsheetApp.getActiveSpreadsheet();
 var column = spr.getRange('C:C');
 var values = column.getValues(); // get all data in one call
 var ct = 0;
 while ( values[ct][0] != "" ) {
   ct++;
 }
 return (ct+1);
}
