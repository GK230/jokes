const req = require("express/lib/request");
const dbClient = require("../../utils/dbClient.js");

// Delete joke
const deleteJoke = async (req, res) => {
  const jokeId = Number(req.params.id);

  try {
    const deletedJoke = await dbClient.funny.delete({
      where: { id: jokeId },
    });
    if (deletedJoke) res.json({ msg: "Joke deleted" });
  } catch (e) {
    console.log(e);
    res.json(e.message);
  }
};

// Update joke
const updateJoke = async (req, res) => {
  const jokeId = Number(req.params.id);
  const joke = req.body;

  try {
    const updatedJoke = await dbClient.funny.update({
      where: { id: jokeId },
      data: { joke: joke.joke },
    });
    if (updatedJoke) res.json({ data: updatedJoke });
  } catch (e) {
    console.log(e);
    res.json(e.message);
  }
};

// Add a joke
const addOneJoke = async (req, res) => {
  {
    const newJoke = req.body;

    try {
      const validatedJoke = {
        ...newJoke,
      };

      const joke = await dbClient.funny.create({ data: validatedJoke });
      res.json({ data: joke });
    } catch (e) {
      if (e.message) {
        res.json({ msg: e.message });
      }
    }
  }
};

// Get random joke
const randomJoke = async (req, res) => {
  count = await dbClient.funny.count();
  let rand = Math.floor(Math.random() * count);

  try {
    await dbClient.funny
      .findUnique({
        where: {
          id: rand,
        },
      })
      .then((joke) => {
        res.json({ joke });
      });
  } catch (e) {
    if (e.message) {
      res.json({ msg: e.message });
    }
  }
};

module.exports = {
  randomJoke,
  addOneJoke,
  updateJoke,
  deleteJoke,
};
