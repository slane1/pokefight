import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log(err));

  