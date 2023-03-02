exports.getRandomWord = async (req, res) => {
  const characters = `1234567890-=qwertyuiop[]\asdfghjkl;'zxcvbnm,./!@#$%^&*()_+{}|:"<>?`;
  const minLength = 3;
  const maxLength =
    Math.floor(Math.random() * (12 - minLength + 1)) + minLength;
  let word = ``;
  for (let i = 0; i < maxLength; i++) {
    const randomIDX = Math.floor(Math.random() * characters.length);
    const randomChar = characters[randomIDX];
    word += randomChar;
  }
  try {
    return res.status(200).json({ word });
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }
};
