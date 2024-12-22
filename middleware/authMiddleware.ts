import { Request, Response, NextFunction } from "express";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): any => {
  // Check for the Authorization header
  const token = req.headers.authorization;

  if (!token) {
    // If there's no token, send an unauthorized response
    return res.status(401).json({ message: "Authorization token is required" });
  }

  // In a real application, you would verify the token (e.g., using JWT or another method)
  if (
    token !==
    "Bearer PGz8rjIgSguSyLuXfvVkiABQAb8z8VgEZfBsYmmsgKeGd59XJJBKmvmG4ua5XMIq"
  ) {
    // If the token is invalid, send an unauthorized response
    return res.status(403).json({ message: "Invalid token" });
  }

  // If the token is valid, proceed to the next middleware or route handler
  next();
};
