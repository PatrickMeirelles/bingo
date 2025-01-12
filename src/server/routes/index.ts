import { Router } from "express";
import { BingoController } from "../controllers";

const router = Router();

router.get("/", (_, res) => {
    return res.status(200).send("Bingo")
})

router.get("/sort/number", BingoController.sortNumberRandom)
router.get("/sorted/numbers", BingoController.getSortedNumbers)
router.delete("/reset", BingoController.resetSortedNumbers)

export { router }