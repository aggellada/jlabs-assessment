import express from "express";
import { config } from "dotenv";
import authRoutes from "./routes/user.routes.js";
import { initDb } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";

config();

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);

initDb().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
});
