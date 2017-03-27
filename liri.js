var twitter = require('./twitter');
// var spotify = require('./spotify');
// var IMDB = require('./IMDB');
// var fs = require("fs");

var command = process.argv[2];

// if command 'my-tweets' is passed 
if (command === 'my-tweets') {
	// print my latest 20 tweets from Twitter
	twitter.getLatest20Tweets();
// if command 'do-what-it-says' is passed
} else if (command === 'do-what-it-says') {
	console.log(2, command)
	//
}
// if command 'spotify-this-song' or 'movie-this' is passed
else if (command === 'spotify-this-song' || command === 'movie-this') {
	console.log(3, command)

}



