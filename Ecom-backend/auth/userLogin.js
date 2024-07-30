const user = require("../models/userModel");
const bycrpt = require("bcrypt");
const generateToken = require("../models/auth.service");

exports.userLogin = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Invalid Credentials" });
  }

  try {
    const currentUser = await user.findOne({ username });

    if (
      !currentUser ||
      !(await bycrpt.compare(password, currentUser.password))
    ) {
      return res.status(401).json({ message: "Credentials failed" });
    }

    const token = generateToken(currentUser);

    return res
      .status(200)
      .json({ Welcome: "User logged in successfully", token });
  } catch (error) {
    console.error(error.message);
    next(error);
    return res.status(400).json({ message: error.message });
  }
};
