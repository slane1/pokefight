import {Router} from "express"
import * as winnerController from "../controllers/winnerController.js"

const winnerRouter = Router()

winnerRouter.route("/").get(winnerController.getPokemonWinners)
winnerRouter.route("/").post(winnerController.postWinner)


export default winnerRouter;