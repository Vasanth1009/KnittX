import express, { Request, Response } from "express";
import cors from "cors";
import customerRoute from "./routes/customerRoute";

const app = express();
const decodeIDToken = require("../src/middlewares/authMiddleware");

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(decodeIDToken);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to KnittX-API");
});

app.use("/api/customer", customerRoute);

export default app;
