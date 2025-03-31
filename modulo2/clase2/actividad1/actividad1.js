const fs = require('fs');

const fileRoute = './books.json';

fs.readFile(fileRoute, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file', err);
        return
    }

    const book = JSON.parse(data)
    console.log('Libros actuales:', book.title, ', Autor', book.author);

    const updatedBook ={
        id: book.id,
        title: book.title,
        author: book.author,
        year: book.year + 20,
        gender: book.gender,
        pages: 400
    };

    console.log('Libros actualizados:', updatedBook);
})
