import { data } from "../data.js";

export const getAllPokemon = (req, res) => {
  res.json(data);
};

export const getPokemonById = (req, res) => {
  const { id } = req.params;
  const result = data.find((c) => c.id === parseInt(id));
  res.send(result);
};

export const getPokemonDetail = (req, res) => {
  const { id, detail } = req.params;
  const result = data.find((c) => c.id === parseInt(id));
  res.send(result[detail]);
};