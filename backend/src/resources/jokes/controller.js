const dbClient = require("../../utils/dbClient.js");

async function deleteJoke(req, res) {
  const jokeId = Number(req.params.id);

  const deletedJoke = await dbClient.funny.delete({
    where: { id: jokeId },
  });
  res.json({ data: deletedJoke });
}

async function updateJoke(req, res) {
  const jokeId = Number(req.params.id);
  const joke = req.body;

  const updatedJoke = await dbClient.funny.update({
    where: { id: jokeId },
    data: { joke: joke.joke },
  });
  res.json({ data: updatedJoke });
}

async function addOneJoke(req, res) {
  const newJoke = req.body;

  try {
    const validatedJoke = {
      ...newJoke,
    };

    const joke = await dbClient.funny.create({ data: validatedJoke });
    res.json({ data: joke });
  } catch (error) {
    if (error.message) {
      res.json({ msg: error.message });
    }
  }
}

async function randomJoke(req, res) {
  count = await dbClient.funny.count();
  let rand = Math.floor(Math.random() * count);

  await dbClient.funny
    .findUnique({
      where: {
        id: rand,
      },
    })
    .then((joke) => {
      res.json({ joke });
    });
}

module.exports = {
  randomJoke,
  addOneJoke,
  updateJoke,
  deleteJoke,
};
