const MovieModel = require('../model/movieModel');
const MovieView = require('../view/movieView');

const MovieController = {
    handlerRequest: (title) =>{
        const movie = MovieModel.getMovieByTitle(title);
        return MovieView.formatResponse(movie)
    }
}

module.exports = MovieController;