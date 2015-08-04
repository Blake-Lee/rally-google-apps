# Rally Task Import
This add-on is for Google Spreadsheet. It helps create the Rally Task Import template, and bulk add commonly used tasks.

## Installation Instructions
1. Open appropriate spreadsheet
2. Create a new blank project in the script editor
  1. On the menu bar, click 'Tools'
  2. Click 'Script Editor'
  3. Click 'Close' on the Welcome Screen
3. Add the code from Code.gs in this repo into that file
4. Create file and copy code from editUS.html
  1. Click 'File'
  2. Click 'New'
  3. Click 'Html file'
  4. Enter file name 'editUS'
  5. Click 'OK'
5. Create file and copy code from newUS.html
  1. Click 'File'
  2. Click 'New'
  3. Click 'Html file'
  4. Enter file name 'newUS'
  5. Click 'OK'
6. In Code.gs, Edit the array located in the function `getDefaultTasks()` with the tasks you use most often
7. Click Save
8. Name the Project whatever you wish
9. Reload your spreadsheet
10. Success! On the menu bar, you should now see a menu labeled 'Rally'

## User Instructions

### Adding a User Story
1. On the menu bar, click Rally
2. Click 'New User Story'
3. Enter the ID of the User Story from Rally
4. Enter User Story Name (Note: This is just for reference with the sheet name, does not break Rally import)
5. Enter email of the Rally user who will be uploading the tasks
6. Click 'Save'
7. Success! You should now have a new worksheet.

### Editing a User Story
1. On the menu bar, click Rally
2. Click 'Edit User Story'
3. Select the tasks you want to generate. (Note: See installation instructions on how to modify this list)
6. Click 'Save'
7. Success! You should now see the tasks.

### Importing into Rally
[Rally User Guide](https://help.rallydev.com/importing-and-exporting-data)


