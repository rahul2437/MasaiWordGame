const Score = require("../models/score.model");

exports.getScore = async (req, res) => {
  try {
    let scores = await Score.find({});
    return res.status(200).json({ scores });
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }
};
exports.addScore = async (req, res) => {
  try {
    let score = new Score(req.body);
    await score.save();
    return res.status(201).json({ message: "Added score successfully" });
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }
};
