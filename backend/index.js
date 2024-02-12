import express from "express";
import pokeRouter from "./routes/pokeRouter.js";
import cors from "cors";
import errorHandler from "./middlewares/errorHandler.js";
const app = express();
app.use(cors());
const port = 3000;
app.use(express.json());
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use("/pokemon", pokeRouter);
