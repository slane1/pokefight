import { Router } from "express";
import {
  getAllPokemon,
  getPokemonById,
  getPokemonDetail,
  getPokemonNameInEnglish,
  getPokemonBaseEntries,
  getPokemonByType,
} from "../controllers/pokeController.js";

const pokeRouter = Router();

pokeRouter.route("/").get(getAllPokemon);
pokeRouter.route("/:id").get(getPokemonById);
pokeRouter.route("/:id/base/:info").get(getPokemonBaseEntries);
pokeRouter.route("/type/:type").get(getPokemonByType);
pokeRouter.route("/:id/name/").get(getPokemonNameInEnglish);
pokeRouter.route("/:id/:detail").get(getPokemonDetail);

export default pokeRouter;
