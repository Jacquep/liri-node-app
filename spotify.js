var spotify = require('spotify');

var logSongInfo = function(song) {
	console.log(song.tracks.items[0].artists[0].name);
	console.log(song.tracks.items[0].name);
	console.log(song.tracks.items[0].preview_url);
	console.log(song.tracks.items[0].album.name);

}

var getSong = function(nameOfSong) {
	spotify.search({ type: 'track', query: nameOfSong, limit: 1}, function(err, data) {
	    if ( err ) {
	        console.log('Error occurred: ' + err);
	        return;
	    } else {
	    	logSongInfo(data);
	    }
	 
	});
};

module.exports = {
	getSong: getSong
};
