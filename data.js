const fs = require("fs");
const parse = require("csv-parse");

fs.readFile("jokes.csv", (err, data) => {
  parse(data, {}, (err, jokes) => {
    const content = jokes;
    processFile(content);
  });
});

let allJokes = [];
function processFile(content) {
  allJokes = [...content];
  for (let joke of content) {
    joke = joke.toString();
    // console.log(joke)
    // allJokes.push(joke)
    allJokes[joke] = joke;
  }
}

console.log(allJokes);
// module.exports = jokes
