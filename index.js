const prompt = require('prompt-sync')()
// REMINDER: Run your code to make sure there are no errors before submitting!
// Create an object that represents your favorite show with the following keys: name (string), genre (string), rating (number) (2 pts)

let myFavoriteShow = {
  name:"Ted Lasso",
  genre:"comedy",
  rating:3.5
}


// Console log the show's name using the object (1 pt)
console.log(myFavoriteShow.name)

// Add a new key called watched and put in a boolean with whether you have seen it (1 pt)
myFavoriteShow.watched = true




// Change the rating of the show to increase it by one (2 pt)
myFavoriteShow.rating += 1





// Loop through the object and print every key and element. (2 pt)
// It should look like: 
// name is Ted Lasso
// genre is comedy
// rating is 4.5
// watched is true
for(let key in myFavoriteShow){
  console.log(key, myFavoriteShow[key])
}



// EXTRA CREDIT
// Make two more show objects and put them all in an array
// Loop through the array and print the names of the shows
let myFavoriteShows = [{
 
  name:"The Flash",
  genre:"Sci-Fiction",
  rating:4.6

},
{
 name:"Arrow",
 genre:"drama",
 rating:4.7
},
{
 name:"Stranger things",
 genre:"drama",
 rating:4.8
}]

for(let i = 0; i < myFavoriteShows.length; i++){
  console.log(myFavoriteShows[i].name)
}






