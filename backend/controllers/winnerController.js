import Winner from "../models/winner.js";


export const postWinner = async (req, res, next) => {
    try {
        const {winner, opponent} = req.body
        const response = await Winner.create({
            winner: winner,
            opponent: opponent
        })
        res.json(response)
    } catch (error) {
        next(error)
    }
}



export const getPokemonWinners = async (req, res, next) => {
    try {
      const pokemoWinners = await Winner.find();
      console.log(pokemoWinners);
      res.json(pokemoWinners);}
    catch (error) { next(error);}
}