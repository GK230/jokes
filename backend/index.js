const { PrismaClient } = require("@prisma/client");

let jokes = require("./jokes");
jokes = jokes.jokes;

const prisma = new PrismaClient();

async function main() {
  //   await prisma.funny.createMany({
  //     data: [
  //       {joke: "My favorite mythical creature? The honest politician."},
  //       {joke: "My internet is so slow, it's just faster to drive to the Google headquarters and ask them in person."},
  //       {joke: "I am a nobody, nobody is perfect, therefore I am perfect."},
  //       {joke: "Behind every successful student, there is a deactivated Facebook account."},
  //       {joke: "When I call a family meeting I turn off the house wifi and wait for them all to come running."},
  //       {joke: "Any room is a panic room if you've lost your phone in it."},
  //       {joke: "What do you call the security outside of a Samsung Store? Guardians of the Galaxy."},
  //     ],
  //   });

  //   const allJokes = await prisma.funny.findMany();
  //   console.log(allJokes);

  let rand = Math.floor(Math.random() * 8);

  const randomJoke = await prisma.funny.findUnique({
    where: {
      id: rand,
    },
    select: {
      joke: true,
    },
  });
  console.log(randomJoke);

  //   const updateJoke = await prisma.funny.update({
  //     where: {
  //       id: id,
  //     },
  //     data: {
  //       joke: 'Viola the Magnificent',
  //     },
  //   })

//   const deleteJoke = await prisma.funny.delete({
//     where: {
//       joke: 'Behind every successful student, there is a deactivated Facebook account.',
//     },
//   });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
