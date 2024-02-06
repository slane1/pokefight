import { Router } from "express";
import { getAllPokemon } from "controllers/pokemonController.js";

const Router = Router();

pokemonRouter.route("/").get(getAllPokemon);

export default PokemonRouter;