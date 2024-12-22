import { getUser, createUser, updateUser } from "@controller/userController";
import { authMiddleware } from "@middleware/authMiddleware";
import { Router } from "express";

const router = Router();

router.get("/user/:id", authMiddleware, getUser);
router.post("/user", authMiddleware, createUser);
router.put("/user/:id", authMiddleware, updateUser);

export default router;
