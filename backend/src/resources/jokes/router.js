const { randomJoke, addOneJoke } = require("./controller");

const jokesRouter = require("express").Router();

jokesRouter.post("/", addOneJoke);

jokesRouter.get("/", randomJoke);

module.exports = jokesRouter;
