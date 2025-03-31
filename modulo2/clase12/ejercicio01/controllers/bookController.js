//Paso 5:
const getBookById = require ( '../models/bookModel')

//Paso 6:

const BookView = require ( '../view/bookView')

//Paso 7:
const BookController = {
    handlerRequest: (id) => {
        const book = getBookById(parseInt(id, 10));
        return BookView.formatResponse(book);
    }
}

module.exports = BookController