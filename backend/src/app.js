import express from "express";
import cors from "cors";
import authRouter from "./modules/auth/auth.routers.js";
import { authenticate } from "./shared/middleware/authenticate.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);

app.get("/", authenticate, (req, res) => {
   res.json({ message: "Welcome to the FinTrack API!" }); 
});

export default app;