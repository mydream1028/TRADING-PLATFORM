import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;

export const server = app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}`)
);

export default app;