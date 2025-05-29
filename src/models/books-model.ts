//Importaciones
import fs from 'fs';
import path from 'path';

const filePath = path.join(__dirname, '../database/books.json');

//Defino una interfaz en TypeScript para representar la estructura de un libro
interface Book {
    id: number;
    title: string;
    author: string;
}

//clase para manejar los libros en la base de datos donde defino las operaciones
export class BookModel {

    //metodo para obtener todos los libros
    static getBooks(): Book[] {
        //lee el contenido del archivo JSON y lo convierte a un objeto JS
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        return data.books
    }

    static getBook(id: number): Book | undefined {
        const data = this.getBooks();
        return data.find((book) => book.id === id)
    }

    static addBook(newBook: Book): Book {
        //lectura de libros existentes
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        //creacion de constante para nuevo id del nuevo libro a adicionar
        const newId = (data.books.length + 1)
        //creacion de datos del nuevo libro
        const book = {...newBook, id: newId}
        //actualizacion de los libros existentes
        data.books.push(book)

        data.info.total += 1
        //guarda los datos actualizados en el archivo JSON
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        //devuelve el libro creado
        return book;
    }

    static updateBook(id: number, updatedData: Partial<Book>): Book | null {
        //lectura de los libros existentes
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        //busqueda del libro a actualizar de acuerdo al id
        const index = data.books.findIndex((book: Book) => book.id === id)
        //si no encuentra el libro devuelve null
        if (index === -1) return null

        //actualizacion del libro
        data.books[index] = { ...data.books[index], ...updatedData};
        //guarda los datos actualizados en el archivo JSON
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

        //devuelve el libro actualizado
        return data.books[index];
    }

    static deleteBook(id: number): boolean {
        //lee el archivo JSON
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        //encuentra el libro con id
        const index = data.books.findIndex((book: Book) => book.id === id);

        if(index === -1) return false;
        
        //elimina el libro del array
        data.books.splice(index, 1);
        //reduce el total de libros
        data.info.total -= 1;
        //guarda los cambios en el archivo JSON
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

        //devuelve true para indicar que la eliminacion fue exitosa
        return true;
    }
}




