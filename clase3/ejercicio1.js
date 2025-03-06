// Actividad 1: Registro de libros favoritos
// Consigna: ¡Hola! Hoy serás una bibliotecaria digital. 
// Debes crear un programa que permita registrar libros favoritos 
// en un archivo JSON. Implementa las siguientes funciones:
// 1.Agregar un libro: Se debe agregar un libro a la lista de favoritos. 
// Para esto, el libro tendrá solo un campo: su nombre.
// 2.Listar los libros: Muestra todos los libros registrados.
// Pistas:
// •Usa un archivo JSON para guardar los libros.
// •Si el archivo no existe, comienza con un arreglo vacío.

const fs = require('fs')
const filePath = './libros.json'

//funcion para leer los libros
const readBooks = () => {
    //si el archivo no exsite, creamos un archivo con un arreglo
    if (!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '[]')
    }
    const content = fs.readFileSync(filePath, 'utf8')// leemos el archivo
    return JSON.parse(content)// convertimos el contenido a un arreglo de libros
}

//funcion para escribir los libros en el archivo

const writeBooks = (books) => {
    fs.writeFileSync(filePath, JSON.stringify(books, null, 2))// escribir los libros en el archivo
}

//agregar un libro
const addBook = (nameBook) =>{
    const books = readBooks()// leer los libros existentes
    books.push({id: books.length + 1, name: nameBook})//agregar un nuevo libro
    writeBooks(books)//guarda la lista actualizada
    console.log(`Libro agregado:  "${nameBook}"`)
}

//listar los libros
const listBooks = () => {
    const books = readBooks()//leemos los libros
    console.log("Lista de libros favoritos:  ");
    books.forEach(book => {
        console.log(`${book.id}. ${book.name} `)
    })
    }

//ejemplo de uso de las funciones

addBook('El principito')
addBook('Cien años de Soledad')
addBook('Daylan Kifki')
addBook('El libro de la Selva')
listBooks() 