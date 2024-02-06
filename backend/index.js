import express from "express";
import pokeRouter  from "./routes/pokeRouter.js";

const app = express();
const port = 3000;
app.listen(port, () => { console.log(`Server is running on port http://localhost:${port}`)});

app.use("/pokemon", pokeRouter);

