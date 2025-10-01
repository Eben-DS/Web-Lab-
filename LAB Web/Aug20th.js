
// Write a regular function calculateDiscount that takes price and discountPercent (e.g., 20 for 20%) and returns the discounted price. Create an arrow function
// formatPrice that takes a price and returns it as a string like "$X.XX". Use an anonymous function to log the result of calculateDiscount(100, 25) through
// formatPrice .

function calculateDiscount(price, discountPercent) {
    return price - (price * (discountPercent / 100));
}
const formatPrice = (price) => `$${price.toFixed(2)}`;


var a = function() {
    const discountedPrice = calculateDiscount(100, 25);
    console.log("Price: " + formatPrice(discountedPrice));
}

a();


// Question 2

// Create an arrow function createCounter that returns a function. The returned function should increment a counter (starting at 0) each time it's called. Use a
// callback to log the counter value after calling it 3 times. Test it.

var counter = 0



// Question 3

var books = ['Book1', 'Book2', 'Book3', 'Book4', 'Book5']
var newCollection = books.splice(1,1,'New_Book')

console.log(newCollection)
books.push('Pushed_Book')
console.log(books)


// Question 4

function slicer(arr){
    var product = 1;
    arr.slice(arr.length-3, arr.length).forEach(element => {
        product*= element;
    });
    return product;
}

var arr = [2, 4, 6, 8, 10];
console.log(slicer(arr)); // Output: 192 (4 * 6 * 8)


// Create an object for a movie with title , year , genres (array), and a method info returning "Title (Year): Genres". Update the year and add a director
// property. Call info .

var movie = {
    title: "Inception",
    year: 2010,
    genres: ["Sci-Fi", "Action"],
}

movie.info = function(){
    return `${this.title} (${this.year}): ${this.genres.join(", ")}`;
}

console.log(movie.info()); 

// Question 5

var playlist = {
    songs: [],
    addSong: function(song) {this.songs.push(song)}

}


playlist.addSong("Song1");
playlist.addSong("Song2");


// TO see
Object.keys(playlist).forEach(key => {
    console.log(`${key} : ${playlist[key]}`);

})

var p = new playlist()
console.log(p.songs); // Output: ["Song1", "Song2"]


var container = document.E