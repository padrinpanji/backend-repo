import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import userRoutes from "@routes/userRoutes";
import bodyParser from "body-parser";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Ebuddy Backend Repo!");
});
app.use(bodyParser.json());
app.use("/api", userRoutes);

// Start App
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
