import express from "express";

import {
  getUserById,
  getUsers,
  deleteUser,
  updateUser,
  createUser,
} from "../controllers/userController.js";

const router = express.Router();

router.route("/").get(getUsers).post(createUser);

router.route("/:id").get(getUserById).delete(deleteUser).put(updateUser);

export default router;
