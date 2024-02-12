import { data } from "../data.js";

export const getAllPokemon = (req, res, next) => {
  try {
    res.json(data);
  } catch (error) {
    next(error);
  }
};

export const getPokemonById = (req, res, next) => {
  try {
    const { id } = req.params;
    const result = data.find((c) => c.id === parseInt(id));
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const getPokemonDetail = (req, res, next) => {
  try {
    const { id, detail } = req.params;
    const result = data.find((c) => c.id === parseInt(id));
    res.json(result[detail]);
  } catch (error) {
    next(error);
  }
};

export const getPokemonNameInEnglish = (req, res, next) => {
  try {
    const { id } = req.params;
    const result = data.find((c) => c.id === parseInt(id));
    res.json(result["name"]["english"]);
  } catch (error) {
    next(error);
  }
};

export const getPokemonBaseEntries = (req, res, next) => {
  try {
    const { id, info } = req.params;
    const result = data.find((c) => c.id === parseInt(id));
    res.json(result["base"][info]);
  } catch (error) {
    next(error);
  }
};
