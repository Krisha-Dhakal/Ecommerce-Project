const user = require("../models/userModel");
const bycrpt = require("bcrypt");

// all the user CRUD operation is only authenticated to the admin

exports.createUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      res.end("All fields must be filled");
      throw Error("All fields must be filled");
    }

    const currentData = await user.findOne({ username });

    if (currentData) {
      res.status(400).json({
        message: "The username already exist, try again",
      });
    } else {
      const hashedPassword = await bycrpt.hash(password, 10);

      const newUser = await user.create({ username, password: hashedPassword });
      res.status(201).json({ newUser });
    }
  } catch (err) {
    console.log(err.message);
  }
};

exports.getUsername = async (req, res) => {
  try {
    const userDetail = await user.find();
    console.log(userDetail);
    res.status(200).json({ data: userDetail });
  } catch (err) {}
};

exports.getUserById = async (req, res) => {
  // make this get feature only available to role admin
  try {
    const requestedUser = await user.findById(req.params.id);
    if (!requestedUser) {
      res.status(404).json({ message: "Requested User not found" });
    }
    res.status(201).json({ message: `requested data:${requestedUser}` });
  } catch (err) {
    console.log(err.message);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const requestedUser = await user.findById(req.params.id);

    if (requestedUser) {
      await requestedUser.deleteOne();
      res.status(201).json({ message: "Succesfully deleted user" });
    }
    res.status(404).json({ message: "Succesfully deleted user" });
  } catch (err) {
    console.log(err.message);
    console.log("Not successful");
  }
};

exports.updateUser = async (req, res) => {
  //
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      throw new Error("All update fields are required");
    }

    const requestedData = await user.findByIdAndUpdate(
      req.params.id,
      {
        username,
        password,
      },
      { new: true }
    );

    if (!requestedData) {
      res.status(404).json({ message: "Requested product not found" });
    }
    res.status(200).json(requestedData);
  } catch (err) {
    console.log(err.message);
  }
};

exports.updatePatchUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const requestPassword = password;
    console.log(requestPassword, "reqPassword");

    if (requestPassword) {
      const hashedPassword = await bycrpt.hash(requestPassword, 10);
      console.log(hashedPassword, "hashedPassword");
      return hashedPassword;
    }

    console.log("hashedPassword outside the if_Else");

    const updateProduct = await user.findByIdAndUpdate(
      req.params.id,
      {
        ...data,
        password: hashedPassword,
      },
      { new: false }
    );
    console.log(`This is the update requested:${updateProduct}`);
    res.status(201).json({ newData: updateProduct });
  } catch (err) {
    console.log(err.message);
  }
};
