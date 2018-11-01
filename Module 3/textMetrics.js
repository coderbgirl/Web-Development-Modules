const bluebird = require("bluebird");
const Promise = bluebird.Promise;

// We use bluebird to make a copy of fs
// that has all its normal methods, and
// {methodName}Async method versions that return
// promises as well; ie, you will have a copy
// of fs with fs.stat(path, callback) and
// fs.statAsync(path), which returns a promise
// thus allowing us to await it.
const fs = bluebird.promisifyAll(require("fs"));

const createMetrics = async function createMetrics(text) {
  text = text.toLowerCase();

  const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const vowels = ["a", "e", "i", "o", "u"];

  let totalLetters = 0;
  let totalNonLetters = 0;
  let totalApostrope = 0;
  let totalVowels = 0;
  let totalConsonants = 0;
  let totalWords = 0;
  let uniqueWords = [];
  let longWords = 0;
  let currWordLength = 0;
  let currWord = "";
  let wordMap = {};

  for (let i = 0; i < text.length; i++) {
    let char = text.charAt(i);
    let nextChar = text.charAt(i+1);
    if (char+nextChar == "\\n" || char+nextChar == '\\t') {
      totalNonLetters++;
      if (currWord != "") {
        if (wordMap[currWord] == undefined) {
          wordMap[currWord] = 0;
          uniqueWords.push(currWord);
        }
        wordMap[currWord]++;
      }
      currWord = "";
      currWordLength = 0;
      i++;
    }
    else if (letters.includes(char)) {
      totalLetters++;
      if (currWordLength == 0) {
        totalWords++;
      }
      currWordLength++;
      if (currWordLength == 6) {
        longWords++;
      }
      if (vowels.includes(char)) {
        totalVowels++
      }
      else {
        totalConsonants++;
      }
      currWord = currWord + char;
    }
    else if (char == "'") {
      currWordLength++;
      totalNonLetters++;
      totalApostrope++;
      currWord = currWord + char;
    }
    else {
      if (currWord != "") {
        if (wordMap[currWord] == undefined) {
          wordMap[currWord] = 0;
          uniqueWords.push(currWord);
        }
        wordMap[currWord]++;
      }
      currWord = "";
      currWordLength = 0;
      totalNonLetters++;
    }
  }

  return {
    "totalLetters": totalLetters,
    "totalNonLetters": totalNonLetters,
    "totalVowels": totalVowels,
    "totalConsonants": totalConsonants,
    "totalWords": totalWords,
    "uniqueWords": uniqueWords.length,
    "longWords": longWords,
    "averageWordLength": (totalLetters + totalApostrope) / totalWords,
    "wordOccurrences": wordMap
  };
}

module.exports = {
  firstName: "BHUMIKA",
  lastName: "PATOLIYA",
  studentId: "10432870",
  createMetrics
};