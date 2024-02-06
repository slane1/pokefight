import { Router } from "express";
import  { 
    getAllPokemon,
    getPokemonById 
        } from "../controllers/pokeController.js";

const pokeRouter = Router();

pokeRouter.route("/").get(getAllPokemon);
pokeRouter.route("/:id").get(getPokemonById);

export default pokeRouter;