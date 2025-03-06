const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, './book.json')

const getBookById = (id) => {
    try{
        const data = fs.readFileSync(filePath, 'utf8')
        const books = JSON.parse(data)
        return books.find(b => b.id === id) || null 
    } catch (error) {
        console.error('Error al leer el archivo json:', error)
        return null
    }
} 

module.exports = getBookById