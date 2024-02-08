import { Router } from "express";
import  { 
    getAllPokemon,
    getPokemonById,
    getPokemonDetail 
        } from "../controllers/pokeController.js";

const pokeRouter = Router();

pokeRouter.route("/").get(getAllPokemon);
pokeRouter.route("/:id").get(getPokemonById);
pokeRouter.route("/:id/:detail").get(getPokemonDetail);

export default pokeRouter;