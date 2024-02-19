import mongoose from "mongoose";

const winnerSchema = mongoose.Schema({
  winner: String,
  opponent: {
    id: { type: Number },
    name: { type: String },
    type: { type: String },
    hp: { type: Number },
    attack: { type: Number },
    defense: { type: Number },
    speed: { type: Number },
  },
  fighter: {
    id: { type: Number },
    name: { type: String },
    type: { type: String },
    hp: { type: Number },
    attack: { type: Number },
    defense: { type: Number },
    speed: { type: Number },
  },
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Winners", winnerSchema);

