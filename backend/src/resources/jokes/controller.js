const dbClient = require("../../utils/dbClient.js");

async function addOneJoke(req, res) {
  const newJoke = req.body;
  console.log(newJoke)

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
      select: {
        joke: true,
      },
    })
    .then((joke) => {
      res.json({ joke });
    });
}

module.exports = {
  randomJoke,
  addOneJoke
};
