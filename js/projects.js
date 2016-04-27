// constructor for the portfolio cards
function Card(title, src, description, demo){
	this.title = title;
	this.src = src + '.png';
	this.description = description;
	this.demo = demo;
}
// create an array and push each card to the array using the constructor
var cards = [];
cards.push(new Card("Interactive Map","langs","Pulls data from JSON files and filters by each category using AngularJS and DataMaps.","http://kdavidmoore.com/languages"));
cards.push(new Card("Chat Room","chat","A chat room built using Node.js and Materialize. Each new tab or new window opens a new chat client.","https://shielded-fortress-12118.herokuapp.com/"));
cards.push(new Card("Search Places","maps","Filters information by city and displays directions using Google Maps API and AngularJS routing.","http://kdavidmoore.com/search-places"));
cards.push(new Card("Movie Crawler","movies","Retrieves data from themoviedb.org API using AJAX and displays results using Isotope filtering.","http://kdavidmoore.com/movie-crawler"));
cards.push(new Card("Panama Papers Tweets","tweets","Pulls tweet data from Twitter API using AJAX and filters results using AngularJS routing.","http://kdavidmoore.com/panama-papers"));
cards.push(new Card("Calculator","calc","A basic calculator written using jQuery.","http://kdavidmoore.com/calculator"));
