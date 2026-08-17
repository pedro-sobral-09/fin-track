import express from "express";
import cors from "cors";
import { authRouter, userRouter, categoryRouter } from "./container.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);

app.use("/users", userRouter);

app.use("/categories", categoryRouter);

app.get("/", (req, res) => {
   res.json({ message: "Welcome to the FinTrack API!" }); 
});

export default app;