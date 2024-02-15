import mongoose from "mongoose";

const winnerSchema = mongoose.Schema({
    winner: {type: String, required: true}, 
    opponent: {type: String, required: true},
    date: {type: Date, default: Date.now}
});

export default mongoose.model("Winner", winnerSchema);