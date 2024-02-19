import Winners from "../models/winner.js";

export const postWinner = async (req, res, next) => {
  try {
    const { winner, opponent, fighter } = req.body;
    console.log(winner);
    console.log(opponent);
    console.log(fighter);
    const response = await Winners.create({
      winner,
      opponent,
      fighter,
    });
    res.json(response);
  } catch (error) {
    next(error);
  }
};


export const getPokemonWinners = async (req, res, next) => {
  try {
    const pokemoWinners = await Winners.find();
    console.log(pokemoWinners);
    res.json(pokemoWinners);
  } catch (error) {
    next(error);
  }
};
