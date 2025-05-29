//Importaciones
import {Request, Response} from 'express';

import {BookModel} from '../models/books-model';

//Controladores para gestionar CRUD de los libros

export const getBooks = (req: Request, res: Response): void => {
    const { title, author } = req.query;
    let books = BookModel.getBooks();

    if (author) {
        const searchAuthor = (author as string).toLowerCase().trim()
        books = books.filter( book => book.author.toLowerCase().includes(searchAuthor));
    }

    if (title) {
        const searchTitle = (title as string).toLowerCase().trim()
        books = books.filter( book => book.title.toLowerCase().includes(searchTitle));
    }

    res.json(books);
};

export const getBook = (req: Request, res: Response): void => {
    const  id  = Number(req.params.id); // convierto en number id
    const book = BookModel.getBook(id);

    if(!book){
        res.status(404).json({error: 'Libro no encontrado'});
    }

    res.json(book);
};

export const createBook = (req: Request, res: Response): void => {
    const newBook = BookModel.addBook(req.body);
    res.status(201).json(newBook);
};

export const updateBook = (req: Request, res: Response): void => {
    const  id  = Number(req.params.id) //convierto en number id
    const updateBook = BookModel.updateBook(id, req.body);

    if(!updateBook){
        res.status(404).json({ error: 'Libro no encontrado' });
    }

    res.json(updateBook);
};


export const deleteBook = (req: Request, res: Response): void => {
    const  id  = Number(req.params.id) //convierto en number id
    const isDeleted = BookModel.deleteBook(id);

    if(!isDeleted){
        res.status(404).json({ error: 'Libro no encontrado' });
    } else {
        res.json({ message: 'Libro eliminado' });
    }

    res.status(204).send();
}



