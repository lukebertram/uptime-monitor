/*
* Library for storing and editing data
*
*/

// Dependencies
const fs = require('fs');
const path = require('path');

// Container for the module (to be exported)
const lib = {};

// Base directory of the data folder
lib.baseDir = path.join(__dirname, '/../.data/');
// __dirname is a constant available in every file of a Node application that corresponds to the location (directory) of the current file

// Write data to a file
// dir = directory (acts as a resource table in a database)
// fileName = the file that acts as a record in the table(dir)
// data = the actual information comprising the file
lib.create = function(dir, fileName, data, callback) {
  // Open the file for writing
    // construct a path the the file and pass the 'wx' flag to indicate that we want to write the file into existence (this will cause an error if the file already exists)
  fs.open(lib.baseDir + dir + '/' + fileName + '.json', 'wx', function(err,fileDescriptor) {
    if (!err && fileDescriptor) {
      // Convert data to string
      const stringData = JSON.stringify(data);

      // Write to the file and close it
      fs.writeFile(fileDescriptor, stringData, function(err){
        if(!err){
          fs.close(fileDescriptor, function(err){
            if(!err){
              callback(false);
            } else {
              callback('Error closing new file');
            }
          })
        } else {
          callback('Error writing to new file');
        }
      })
    } else {
      callback('Could not create new file, it may already exist');
    }
  });
};

// Read data from a file
lib.read = function(dir, fileName, callback){
  fs.readFile(lib.baseDir+dir+'/'+fileName+'.json','utf8', (err, data) => {
    callback(err, data);
  })
};

// Update data inside a file
lib.update = function(dir, fileName, data, callback){
  //Open the file for writing
  fs.open(lib.baseDir+dir+'/'+fileName+'.json', 'r+', (err, fileDescriptor) => {
    if(!err && fileDescriptor){
      // Convert data to a string
      const stringData = JSON.stringify(data);

      // Truncate the file
      fs.truncate(fileDescriptor, err => {
        if (!err){
          // Write to the file and close it
          fs.writeFile(fileDescriptor, stringData, (err) =>{
            if(!err){
              fs.close(fileDescriptor, (err) => {
                if(!err) {
                  callback(false);
                } else {
                  callback('Error closing file')
                }
              })
            }else{
              callback('Error writing to existing file');
            }
          })
        } else {
          callback('Error truncating file');
        }
      })

    }else{
      callback('Could not open the file for updating. It may not exist yet.');
    }
  })
};

// Delete a file
lib.delete = function(dir, fileName, callback){
  // Unlink the file (from the file system)
  fs.unlink(lib.baseDir+dir+'/'+fileName+'.json', err => {
    if(!err){
      callback(false);
    } else {
      callback('Error deleting file');
    }
  });
};

// Export the module
module.exports = lib;
