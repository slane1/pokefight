import express from "express";
import pokeRouter from "./routes/pokeRouter.js";
import winnerRouter from "./routes/winnerRouter.js";
import cors from "cors";
import errorHandler from "./middlewares/errorHandler.js";
import "./db/db.js";

const app = express();
app.use(cors());
const port = 3000;
app.use(express.json());
app.use(errorHandler);
app.use("/pokemon", pokeRouter);
app.use("/winner", winnerRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

