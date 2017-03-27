//store and grab the keys/data from keys.js 
var keys = require("./keys.js");
var request = require('request');
var TWITTER_HOST = 'https://api.twitter.com';

//POST request for Twitter Bearer Token 
var getTwitterBearerToken = function(cb){
	var key = keys.twitterKeys.consumer_key;
	var secret = keys.twitterKeys.consumer_secret;
	//store path for query
	var authPath = '/oauth2/token';
	request({
		url: TWITTER_HOST + authPath,
		method: 'POST',
		auth: {
			user: key,
			pass: secret,
		},
		form: {
		    'grant_type': 'client_credentials'
		}
	}, function(err, res) {
		var json = JSON.parse(res.body);
		cb(json.access_token);		
	});
};

var getTweets = function(access_token){
	//store query perameters 
	var SCREEN_NAME = 'jackjacks111';
	var COUNT = '20';
	var TWEET_QUERY_STRING = '?screen_name=' + SCREEN_NAME + '&count=' + COUNT;
	var path = '/1.1/statuses/user_timeline.json' + TWEET_QUERY_STRING;
	request({
		url: TWITTER_HOST + path,
		auth: {
			'bearer': access_token,
		}
	}, function(error,res) {
	   console.log(error);
	   var json = JSON.parse(res.body);
	   console.log(json);
	});
};

exports.getLatest20Tweets = function() {
	getTwitterBearerToken(getTweets);
}
