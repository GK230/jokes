const { randomJoke, addOneJoke, updateJoke, deleteJoke } = require("./controller");

const jokesRouter = require("express").Router();

jokesRouter.delete("/:id", deleteJoke);

jokesRouter.put("/:id", updateJoke);

jokesRouter.post("/", addOneJoke);

jokesRouter.get("/", randomJoke);

module.exports = jokesRouter;
