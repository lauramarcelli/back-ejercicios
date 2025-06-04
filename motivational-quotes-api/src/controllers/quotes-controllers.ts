import {Request} from "express";

import {Response} from "express";

import {QuotesModel} from "../models/quotes-models";

//controlador para obtener todas las frases
export const getAllQuotes = (req: Request, res: Response) : void =>{
    const quotes = QuotesModel.getAllQuotes();
    res.json(quotes)
}

export const getQuotesById = (req: Request, res: Response): void => {
    //extraemos el parametro id de la solicitud
    const {id} = req.params
    //llamamos al metodo del modelo para buscar la frase por id
    const quote = QuotesModel.getQuotesById(id)

    if(!quote) {
        res.status(404).json({error: 'Frase no encontrada'})
    }
    res.json(quote)
}

export const createQuotes = (req: Request, res: Response): void => {
    const newQuote = QuotesModel.addQuote(req.body)
    //llamamos al metodo del modelo para agregar una nueva frase a la base de datos
    res.status(201).json(newQuote)
}

export const updateQuotes = (req: Request, res: Response): void => {
    const {id} = req.params
    const updateQuotes = QuotesModel.updateQuote(id, req.body)
}

export const deleteQuotes = (req: Request, res: Response): void => {
    const {id} = req.params
    const isDeleted = QuotesModel.deleteQuote(id)
    if(!isDeleted) {
        res.status(404).json({error: 'Frase no encontrada'})
    }
    res.status(204).send()
}