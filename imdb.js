var request = require("request");

var logMovieInfo = function(movie) {
    console.log(movie.Title, movie.Year, movie.imdbRating);
    console.log(movie.Country);
    console.log(movie.Language);
    console.log(movie.Plot);
    console.log(movie.Actors);
    console.log(movie.tomatoRating);
    console.log(movie.tomatoURL);
}

var getMovie = function(movieTitle){

		var HOST = 'http://www.omdbapi.com/';
		var queryString = '?t=' + movieTitle + '&tomatoes=true';
		var requestConfig = { 
			url: HOST + queryString,
			method: 'GET',
		}

		request(requestConfig, function(err, res) {
			var movieJson = JSON.parse(res.body)	
			logMovieInfo(movieJson);
		});
};

module.exports.getMovie = getMovie;





  
   