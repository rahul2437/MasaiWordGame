const express = require("express");
const app = express();
const cors = require("cors");
const { wordRouter } = require("./routes/word.route");
const { scoreRouter } = require("./routes/score.route");
const { connection } = require("./config/db");
require("dotenv").config();
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use("/randomwords", wordRouter);
app.use("/scores", scoreRouter);

app.get("/", (req, res) => {
  res.status(200).json("WELCOME TO WORDS API");
});

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log(
      `Server listening on port http://localhost:${process.env.PORT}`
    );
  } catch (error) {
    console.log(error.message);
  }
});
