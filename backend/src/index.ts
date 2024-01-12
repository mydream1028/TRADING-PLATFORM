import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectDB } from "./db";

dotenv.config();

const app = express();

connectDB(app);

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;

export const server = app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}`)
);

export default app;