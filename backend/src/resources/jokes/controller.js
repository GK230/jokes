const dbClient = require("../../utils/dbClient.js");

async function updateJoke(req, res) {
  const updatedJoke = req.params.body;

  // const updateUser = await prisma.user.update({
  //   where: {
  //     email: "viola@prisma.io",
  //   },
  //   data: {
  //     name: "Viola the Magnificent",
  //   },
  // });

  const updatedJoke = await dbClient.funny.update({ where: { id: id } });
  res.json({ data: joke });
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
      // select: {
      //   id: true,
      //   joke: true,
      // },
    })
    .then((joke) => {
      res.json({ joke });
    });
}

module.exports = {
  randomJoke,
  addOneJoke,
};
