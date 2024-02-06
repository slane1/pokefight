import { Router } from "express";
import { getAllPokemon } from "controllers/pokemonController.js";

const Router = Router();

pokemonRouter.route("/:id").get(getPokemonById);

export default PokemonRouter;