//Importaciones
import {Router} from 'express';

import {
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook
} from '../controllers/books-controller';


// DUDA ¿por qué coloco validateBooks en un middleware aparte?
import { validateBook } from '../middlewares/validate-middleware';


//Instancia de express: "router"

const router: Router = Router();

router.get('/', getBooks);

router.get('/:id', getBook);

router.post('/', validateBook, createBook);

router.patch('/:id', validateBook, updateBook);

router.delete('/:id', deleteBook);



//Exportaciones

export default router;