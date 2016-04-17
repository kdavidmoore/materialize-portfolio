// constructor for the portfolio cards
function Card(title, src, description){
	this.title = title;
	this.src = src + '.png';
	this.description = description;
}
// create an array and push each card to the array using the constructor
var cards = [];
cards.push(new Card("Search Places","maps","Search for different types of professional services in several major U.S. cities."));
cards.push(new Card("Movie Crawler","movies","See what's playing and search for movies, TV shows, and actors."));
