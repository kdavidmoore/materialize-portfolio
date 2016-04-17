// constructor for the portfolio cards
function Card(title, src, description, demo){
	this.title = title;
	this.src = src + '.png';
	this.description = description;
	this.demo = demo;
}
// create an array and push each card to the array using the constructor
var cards = [];
cards.push(new Card("Languages of the World","langs","Filtering countries of the world by major languages spoken, total population, and GDP.","/languages"));
cards.push(new Card("Search Places","maps","Search for different types of professional services in several major U.S. cities.","/search-places"));
cards.push(new Card("Movie Crawler","movies","See what's playing and search for movies, TV shows, and actors.","/movie-crawler"));
cards.push(new Card("Panama Papers Tweets","tweets","Get the latest scoop on the Panama Papers leaks.","/panama-papers"));
cards.push(new Card("Calculator","calc","A basic calculator written in JavaScript.","/calculator"));
