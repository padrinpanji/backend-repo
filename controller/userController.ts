import {
  createUserInFirestore,
  getUserFromFirestore,
  updateUserInFirestore,
} from "@repository/userCollection";
import { Request, Response } from "express";

export const getUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
    } = req;

    if (!id) {
      res.status(400).json({ message: "ID is missing" });
      return;
    }

    const user = await getUserFromFirestore(id);

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.json(user);
  } catch (error) {
    console.error("Error getting user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { body } = req;

    if (Object.keys(body).length === 0) {
      res.status(400).json({ message: "Create params is missing" });
      return;
    }

    const userId = await createUserInFirestore(body);

    res.status(201).json({
      message: "User created successfully",
      userId,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      params: { id },
    } = req;
    const { body } = req;

    if (!id) {
      res.status(400).json({ message: "ID is missing" });
      return;
    }

    if (Object.keys(body).length === 0) {
      res.status(400).json({ message: "Update params is missing" });
      return;
    }

    const success = await updateUserInFirestore(id, body);
    if (!success) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json({
      message: "User updated successfully",
      id,
      body,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
