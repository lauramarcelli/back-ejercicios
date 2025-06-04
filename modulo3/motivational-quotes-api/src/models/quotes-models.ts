import fs  from 'fs'
import path from 'path'

const filePath = path.join(__dirname, '../database/quotes.json')
//definimos la ruta al archivo json que actua como base de datos de las frases

interface Quote {
    id: string, //id de la frase
    quote: string, //frase
    author: string //autor de la frase
}

export class QuotesModel {
    static getAllQuotes(): Quote[] {
        //lee el contenido del archivo JSON y lo convierta a js
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        return data.quotes
    }

    static getQuotesById(id: string): Quote | undefined {
        const data = this.getAllQuotes()
        //obtenga la frase con el id proporcionado, "find" busque y devuelve la frase con el id que le pasamos
        return data.find((quote) => quote.id === id)
    }

    static addQuote(newQuote: Quote): Quote {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        const newId = (data.quotes.length + 1).toString()
        //genera un nuevo id tomando en cuenta la longitud del array
        const quote = {...newQuote, id: newId}
        //crea una frase nueva agregando el id que generamos

        data.quotes.push(quote)
        //agrego la frase al array
        data.info.total += 1
        //incremento el contador
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
        //guardamos los datos actualizado en el json
        return quote
        //devuelve la nueva frase
    }

    static updateQuote(id: string, updatedData: Partial<Quote>): Quote | null {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
       //lee el contenido del archivo json y lo convierte a js
        const index = data.quotes.findIndex((quote : Quote) => quote.id === id)
       //encuentra el indice de la frase que coincide con el id
        if (index === -1) return null
        data.quotes[index] = {...data.quotes[index], ...updatedData}
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
        return data.quotes[index]
    }

    static deleteQuote(id: string): boolean {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
       //lee el contenido del archivo json y lo convierte a js
        const index = data.quotes.findIndex((quote : Quote) => quote.id === id)
       //encuentra el indice de la frase que coincide con el id
        if (index === -1) return false
        data.quotes.splice(index, 1)
        data.info.total -= 1
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
        return true
    }
}