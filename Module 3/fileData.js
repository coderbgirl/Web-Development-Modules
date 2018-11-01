const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const fs = bluebird.promisifyAll(require("fs"));

const getFileAsString = async function getFileAsString(path) {
  return new Promise((fulfill, reject) => {
    if (!path) throw "Path not provided";

    fs.readFileAsync(path, "utf-8", (error, data) => {
      if (error) {
        reject(error);
        return;
      }
      try {
        console.log("Step 2: " + path + " read successfully.")
        fulfill(data);
      } catch (parseError) {
        reject(parseError);
      }
    });
  });
}

const getFileAsJSON = async function getFileAsJSON(path) {
  return new Promise((fulfill, reject) => {
    if (!path) throw "Path not provided";

    fs.readFileAsync(path, "utf-8", (error, data) => {
      if (error) {
        reject(error);
        return;
      }

      try {
        let jsonData = JSON.parse(data);
        fulfill(jsonData);
      } catch (parseError) {
        reject(parseError);
      }
    });
  });
}

const saveStringToFile = async function saveStringToFile(path, text) {
  return new Promise((fulfill, reject) => {
    if (!path) throw "Path not provided";

    fs.writeFile(path, text, (error, cb) => {
      if (error) {
        reject(error);
        return;
      }

      fulfill(text);
    });
  });
}

const saveJSONToFile = async function saveJSONToFile(path, obj) {
  return new Promise((fulfill, reject) => {
    if (!path) throw "Path not provided";

    const text = JSON.stringify(obj, null, 4);
    fs.writeFile(path, text, (error, cb) => {
      if (error) {
        reject(error);
        return;
      }

      fulfill(obj);
    });
  });
}


module.exports = {
  firstName: "BHUMIKA",
  lastName: "PATOLIYA",
  studentId: "10432870",
  getFileAsString,
  getFileAsJSON,
  saveStringToFile,
  saveJSONToFile
};