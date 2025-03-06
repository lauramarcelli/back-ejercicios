const MovieView = {
    formatResponse: (movie) => {
        if (!movie) {
            return JSON.stringify({
                status: "error",
                message: "Pelicula no encontrada"
            })
        }
        return JSON.stringify({
            status: "success",
            data: movie
        })
    }
} 

module.exports = MovieView