// constructor for the portfolio cards
function Card(title, src, description, demo){
	this.title = title;
	this.src = src + '.png';
	this.description = description;
	this.demo = demo;
}
// create an array and push each card to the array using the constructor
var cards = [];
cards.push(new Card("Languages of the World","langs","Pulls data from JSON files and filters by each category using AngularJS and DataMaps.","http://kdavidmoore.com/languages"));
cards.push(new Card("Chat Room","chat","A basic chat room built using Node.js. Each new tab or window opens a new chat client.","https://shielded-fortress-12118.herokuapp.com/"));
cards.push(new Card("Search Places","maps","Displays information about places using Google Maps API and AngularJS routing.","http://kdavidmoore.com/search-places"));
cards.push(new Card("Movie Crawler","movies","Dynamically pulls data from themoviedb.org using AJAX and displays results using Isotope filtering.","http://kdavidmoore.com/movie-crawler"));
cards.push(new Card("Panama Papers Tweets","tweets","Dynamically pulls tweet data from Twitter API and displays results with a language filter.","http://kdavidmoore.com/panama-papers"));
cards.push(new Card("Calculator","calc","A basic calculator written using jQuery.","http://kdavidmoore.com/calculator"));
