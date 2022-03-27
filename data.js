const fs = require("fs");
const parse = require("csv-parse");

function readContent(callback) {
  fs.readFile("jokes.csv", (err, data) => {
    parse(data, {}, (err, jokes) => {
      if (err) return callback(err);
      callback(null, jokes);
    });
  });
}

let allJokes;
readContent(function (err, jokes) {
  allJokes = [...jokes]
});
console.log(allJokes);

// console.log(jokes);

// let allJokes = [];
// async function processFile(jokes) {
//   let content = await jokes;
//   allJokes = content;
//   return content;
//   // for (let joke of content) {
//   //   joke = joke.toString();
//   //   console.log(joke);
//   //   allJokes.push(joke);
//   // }
// }

// console.log(allJokes);

// processFile();
// // console.log(allJokes);
// // // module.exports = jokes
module.exports = readContent
