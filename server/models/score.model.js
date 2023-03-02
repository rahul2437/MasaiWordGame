const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  score: {
    type: String,
    required: true,
  },
});

const Score = mongoose.model("Score", scoreSchema);
module.exports = Score;
