import express, { Express } from "express";
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });

const app: Express = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port: string = process.env.PORT || "3000";

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});