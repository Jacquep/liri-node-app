var fs = require("fs");
var spotify = require("./spotify.js"); // { getSong: getSong };
var twitter = require("./twitter.js");
var imdb = require("./imdb.js");

var args = process.argv.slice(2); 
var command = args[0];
var mediaTitle = args.slice(1).join(' '); 

//identify which command was entered
var checkCommand = function(action, media) {
	// if command 'my-tweets' is passed 
	if (action === 'my-tweets') {
		// print my latest 20 tweets from Twitter
		twitter.get20Tweets();
		// if action 'do-what-it-says' is passed
	} else if (action === 'do-what-it-says') {
		//run spotify.js from random.txt file
		var text = fs.readFileSync('./random.txt','utf-8'); // "spotify-this-song,'I Want it That Way'"
		//change text output into two strings 
		var textOutput = text.split(','); // ['spotify-this-song', 'I Want it That Way']
		//take text and run it in checkCommand function 
		checkCommand(textOutput[0],textOutput[1]);		
	}
	// if action 'spotify-this-song' is passed
	else if (action === 'spotify-this-song') {
		
		if (media) {
			spotify.getSong(media);
		} else {
			spotify.getSong('The Sign by Ace of Base');
		}
	}
	else if (action === 'movie-this') {
		
		 if (media) {
		 	imdb.getMovie(media); 
		 } else {
		 	imdb.getMovie('Mr. Nobody');		 	
		}
	}

};


checkCommand(command,mediaTitle);


