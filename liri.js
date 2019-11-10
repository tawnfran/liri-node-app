require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require("axios");


// capture comand that user inputs 
var userCommand = process.argv[2];
var userRequest = // everything index of 3 and later

// Make a switch statement for the four commands. The default case should tell the user to try again.

console.log(userCommand);
// check if userCommand is "concert-this"
    // run and API call using axios to the bands-in-town API
    // insert the user's search term in the queryURL

    // display name of venue, venue location, and date of the event
    // format the date of the event to be MM/DD/YYYY 

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

  // Display to the user:
  // * Title of the movie.
  // * Year the movie came out.
  // * IMDB Rating of the movie.
  // * Rotten Tomatoes Rating of the movie.
  // * Country where the movie was produced.
  // * Language of the movie.
  // * Plot of the movie.
  // * Actors in the movie.

  // Provide a default search if the user didn't provide an argument.

// check is userCommand is "do-what-it-says"

 // Use "fs" to read the random.txt file (hint, you will need to require fs! Look at activities 12 and 13)
  // The command will be whatever is before the comma. The search term will be whatever is after the comma.
  // Make the corresponding API call depending on what the command is.

// If the user doesn't provide 1 of the 4 recognizable commands, display message to the user to try again


