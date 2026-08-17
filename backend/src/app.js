import express from "express";
import cors from "cors";
import authRouter from "./modules/auth/index.js";
import userRouter from "./modules/user/index.js";
import categoryRouter from "./modules/category/category.routers.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);

app.use("/user", userRouter);

app.use("/category", categoryRouter);

app.get("/", (req, res) => {
   res.json({ message: "Welcome to the FinTrack API!" }); 
});

export default app;