import mongoose from "mongoose";

const pokeSchema = mongoose.Schema({
  id: Number,
  name: { engisch: String, japanese: String, chinese: String, french: String },
  type: [String],
  base: {
    HP: Number,
    Attack: Number,
    Defense: Number,
    "Sp. Attck": Number,
    "Sp. Defense": Number,
    Speed: Number,
  },
});

export default mongoose.model("Pokemon", pokeSchema);
