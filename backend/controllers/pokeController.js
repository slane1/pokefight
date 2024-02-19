//import { data } from "../data.js";
import Pokemon from "../models/pokemon.js";

export const getAllPokemon = async (req, res, next) => {
  try {
    const pokemon = await Pokemon.find().sort({ id: 1 });
    if (!pokemon.length) {
      throw { statusCode: 404, message: "no pokemons found" };
    }

    res.json(pokemon);
  } catch (error) {
    next(error);
  }
};

export const getPokemonById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const pokemon = await Pokemon.findOne({ id: id });
    res.json(pokemon);
  } catch (error) {
    next(error);
  }
};

export const getPokemonByType = async (req, res, next) => {
  try {
    const { type } = req.params;
    const pokemon = await Pokemon.find({ type: type });
    res.json(pokemon);
  } catch (error) {
    next(error);
  }
};

export const getPokemonDetail = async (req, res, next) => {
  try {
    const { id, detail } = req.params;
    const pokemon = await Pokemon.findOne({ id: id });
    res.json(pokemon[detail]);
  } catch (error) {
    next(error);
  }
};

export const getPokemonNameInEnglish = async (req, res, next) => {
  try {
    const { id } = req.params;
    const pokemon = (await Pokemon.findOne({ id: id })).toObject();
    res.json(pokemon.name.english);
  } catch (error) {
    next(error);
  }
};

export const getPokemonBaseEntries = async (req, res, next) => {
  try {
    const { id, info } = req.params;
    const pokemon = await Pokemon.findOne({ id: id }, "base");
    console.log(pokemon);
    res.json(pokemon["base"][info]);
  } catch (error) {
    next(error);
  }
};
