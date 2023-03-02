const { addScore, getScore } = require("../controller/score.controller");

const express = require("express");

const scoreRouter = express.Router();

scoreRouter.get("/", getScore);
scoreRouter.post("/", addScore);

module.exports = { scoreRouter };
