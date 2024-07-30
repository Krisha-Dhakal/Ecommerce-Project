const jwtwebtoken = require("jsonwebtoken");

const generateToken = (user) => {
  const payload = {
    userId: user.id.toString(),
    userName: { userName: user.username },
  };
  const jwtSecret = process.env.JWT_SECRET || "";

  return jwtwebtoken.sign(payload, jwtSecret, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

module.exports = generateToken;
