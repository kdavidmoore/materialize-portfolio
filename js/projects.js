// constructor for the portfolio cards
function Card(title, src, description, demo){
	this.title = title;
	this.src = src + '.png';
	this.description = description;
	this.demo = demo;
}
// create an array and push each card to the array using the constructor
var cards = [];
cards.push(new Card("Languages of the World","langs","Filtering countries of the world by major languages spoken, total population, and GDP.","http://kdavidmoore.com/languages"));
cards.push(new Card("Chat Room","chat","A basic chat room built using Node.js. Each new tab or window opens a new chat client.","https://shielded-fortress-12118.herokuapp.com/"));
cards.push(new Card("Search Places","maps","Search for different types of professional services in several major U.S. cities.","http://kdavidmoore.com/search-places"));
cards.push(new Card("Movie Crawler","movies","See what's playing and search for movies, TV shows, and actors.","http://kdavidmoore.com/movie-crawler"));
cards.push(new Card("Panama Papers Tweets","tweets","Get the latest scoop on the Panama Papers leaks.","http://kdavidmoore.com/panama-papers"));
cards.push(new Card("Calculator","calc","A basic calculator written in JavaScript.","http://kdavidmoore.com/calculator"));
