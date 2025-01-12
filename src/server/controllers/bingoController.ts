import { Request, Response } from "express";
import dotenv from "dotenv";
import { StatusCodes} from "http-status-codes";

dotenv.config()

const sortedNumbers = new Set<number>();

export function sortNumber(): number {
    return Math.floor(Math.random() * 75) + 1;
}

export const sortNumberRandom = async (req: Request, res: Response) => {
    try {
        let numberSorted: number;

        do {
            numberSorted = sortNumber();
        } while (sortedNumbers.has(numberSorted));

        sortedNumbers.add(numberSorted);

        if (sortedNumbers.size === 75) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                success: false,
                message: "Todos os números já foram sorteados.",
            });
        }

        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Número aleatório gerado com sucesso",
            data: { number: numberSorted }
        });

    } catch (err) {
        const errorMessage = err instanceof Error ? err.message : String(err);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Ocorreu um erro ao gerar o número aleatório",
            error: errorMessage
        });
    }
};

export const getSortedNumbers = (req: Request, res: Response) => {
    try {
        const arrNumbers = Array.from(sortedNumbers);

        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Lista de números sorteados",
            data: { sortedNumbers: arrNumbers }
        });

    } catch (err) {
        const errorMessage = err instanceof Error ? err.message : String(err);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Ocorreu um erro ao retornar os números sorteados",
            error: errorMessage
        });
    }
};

export const resetSortedNumbers = (req: Request, res: Response) => {
    try {
        sortedNumbers.clear();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Os números sorteados foram zerados com sucesso."
        });
    } catch (err) {
        const errorMessage = err instanceof Error ? err.message : String(err);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Ocorreu um erro ao zerar os números sorteados",
            error: errorMessage
        });
    }
};
