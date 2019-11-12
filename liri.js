require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var moment = require("moment");


// capture comand that user inputs 
var userCommand = process.argv[2];
var userRequest = process.argv[3];

// Make a switch statement for the four commands. The default case should tell the user to try again
switch (userCommand) {
  case "concert-this":
    concert(userRequest);
    break;

  case "spotify-this-song":
    if (userRequest === "") {
      userRequest = "The-sign";
      spotify(userRequest);
    } else
      spotify(userRequest);
    break;

  case "movie-this":
    if (userRequest === "") {
      userRequest = "Mr.Nobody";
      movie(userRequest);
    } else
      movie(userRequest);
    break;

  case "do-what-it-says":
    doWhatItSays(userRequest);
    break;

  case "try-again":
    tryAgain(userRequest);
    break;
}
// console.log(userCommand);
// check if userCommand is "concert-this"
// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
// insert the user's search term in the queryURL
// display name of venue, venue location, and date of the event
// format the date of the event to be MM/DD/YYYY 
// run and API call using axios to the bands-in-town API
function concert(userRequest) {
  var queryUrl = "https://rest.bandsintown.com/artists/" + userRequest + "/events?app_id=codingbootcamp";

  axios.get(queryUrl).then(
    function (response) {
      // if (response.data.Artist === "") {
      //   console.log("There are no results for this artist!");
      // } else {
      if (response.data.length === 0) {
        console.log(userRequest + "has no shows nearby");
      } else {
        for (let i = 0; i < response.data.length; i++) {
          console.log(response.data[i].venue.name);
          console.log(response.data[i].venue.city);
          console.log(moment(response.data[i].datetime).format("MM/DD/YYYY"));
        }
      }
    })
    .catch(function (error) {
      console.log("Error, please try to search again!");
    })
}


// check is userCommand is "spotify-this-song"
// using Spotify node package info, make a call to the Spotify API
// display to the user:
// * Artist(s)
//  * The song's name
//  * A preview link of the song from Spotify
//  * The album that the song is from

// provide a default searchTerm if the user didnt provide an argument






// check is userCommand is "movie-this"
// Use Axios to call the OMDB API using the user's search term. Use activities 17 and 18 as a reference!
function movie(userRequest) {
  var queryUrl = "http://www.omdbapi.com/?t=" + userRequest + "&y=&plot=short&apikey=trilogy";
  // console.log("You picked this movie: " + userRequest);

  axios.get(queryUrl).then(
    function (response) {
      if (response.data.Title === "") {
        console.log("There are no results for this movie");
      } else {
        console.log(response.data.Title);
        console.log(response.data.Year);
        console.log(response.data.Rated);
        console.log(response.data.Ratings[1]);
        console.log(response.data.Country);
        console.log(response.data.Language);
        console.log(response.data.Plot);
        console.log(response.data.Actors);
      }
    })
    .catch(function (error) {
      console.log("Error, please try to search again!");
    })
}




// check is userCommand is "do-what-it-says"

 // Use "fs" to read the random.txt file (hint, you will need to require fs! Look at activities 12 and 13)
  // The command will be whatever is before the comma. The search term will be whatever is after the comma.
  // Make the corresponding API call depending on what the command is.

//otherwise, display for user to try again 


