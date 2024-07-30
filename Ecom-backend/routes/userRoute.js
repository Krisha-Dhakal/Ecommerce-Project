const express = require("express");
const router = express.Router();

const {
  createUser,
  getUsername,
  getUserById,
  deleteUser,
  updateUser,
  updatePatchUser,
} = require("../controller/userController");

router.post("/", createUser);
router.get("/", getUsername);
router.get("/:id", getUserById);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);
router.patch("/:id", updatePatchUser);

module.exports = router;
