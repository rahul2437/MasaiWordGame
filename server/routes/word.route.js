const { getRandomWord } = require("../controller/word.controller");

const express = require("express");

const wordRouter = express.Router();

wordRouter.get("/", getRandomWord);

module.exports = { wordRouter };
