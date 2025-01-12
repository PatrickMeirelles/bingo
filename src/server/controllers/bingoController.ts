import { Request, Response } from "express";
import dotenv from "dotenv";
import { StatusCodes} from "http-status-codes";

dotenv.config()

const sortedNumbers = new Set<number>();

export function sortNumber(): number {
    return Math.floor(Math.random() * 75) + 1;
}

function getLetterForNumber(number: number): string {
    if (number >= 1 && number <= 15) {
        return 'B';
    } else if (number >= 16 && number <= 30) {
        return 'I';
    } else if (number >= 31 && number <= 45) {
        return 'N';
    } else if (number >= 46 && number <= 60) {
        return 'G';
    } else if (number >= 61 && number <= 75) {
        return 'O';
    }
    return '';
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

        const letter = getLetterForNumber(numberSorted);

        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Número aleatório gerado com sucesso",
            data: { number: numberSorted, letter }
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
        const groupedNumbers: Record<string, number[]> = {
            B: [],
            I: [],
            N: [],
            G: [],
            O: []
        };

        sortedNumbers.forEach((number) => {
            const letter = getLetterForNumber(number);
            if (letter) {
                groupedNumbers[letter].push(number);
            }
        });

        const lastNumbers = Array.from(sortedNumbers).slice(-10).reverse();

        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Lista de números sorteados agrupados por letra, com os últimos 10 números",
            data: {
                groupedNumbers,
                lastNumbers
            }
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
