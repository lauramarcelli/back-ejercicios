const fs = require ('fs')
const path = require ('path')

const filePath = path.join(__dirname, '../data/hotel.json')

const MovieModel = {
    getMovieByTitle: (title) => {
        const data = fs.readFileSync(filePath, 'utf8')
        const movies = JSON.parse(data)
        return movies.find(m => m.title === title) || null
    } 

}

module.exports = MovieModel