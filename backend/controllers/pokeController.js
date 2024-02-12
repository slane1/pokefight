import { data } from "../data.js";
import Pokemon from "../models/pokemon.js";

export const getAllPokemon = async (req, res, next) => {
  try {
    const pokemon = await Pokemon.find();
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

// import Image from "../models/image.js";

// export const getAllImages = async (req, res, next) => {
//   try {
//     const images = await Image.find();
//     if (!images.length) {
//       throw { statusCode: 404, message: "Image not found" };
//     }
//     res.json(images);
//   } catch (error) {
//     next(error);
//   }
// };
