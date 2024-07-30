const jsonWebToken = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const jwtSecret = process.env.JWT_SECRET;

  const authHeader = req.header("Authorization") || "";
  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "You are not authorized" });
  }

  console.log(token);

  jsonWebToken.verify(token, jwtSecret, (err, user) => {
    if (err) {
      return res.status(400).json({ message: "Invalid token" });
    }

    if (!user) {
      return res.status(403).json({
        message: "You are not a authenticated individual to perform this task",
      });
    }

    req.user = user;

    next();
  });
};

module.exports = authenticate;
