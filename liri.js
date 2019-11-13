require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var moment = require("moment");
var fs = require("fs");


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
      getSpotify(userRequest);
    } else {
      getSpotify(userRequest);
    }
    break;

  case "movie-this":
    if (userRequest === "") {
      userRequest = "Mr.Nobody";
      movie(userRequest);
    } else {
      movie(userRequest);
    }
    break;

  case "do-what-it-says":
    doWhatItSays();
    // if (userCommand === "spotify-this-song") {
    //   getSpotify(userRequest);
    // } else if (userCommand === "movie-this") {
    //   movie(userRequest);
    // } else if (userCommand === "concert-this") {
    //   concert(userRequest);
    // }
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



//FINISH THIS!!!! only saying "this is loaded" in command line
// check is userCommand is "spotify-this-song"
// using Spotify node package info, make a call to the Spotify API
// display to the user:
// * Artist(s)
//  * The song's name
//  * A preview link of the song from Spotify
//  * The album that the song is from
function getSpotify(userRequest) {
  console.log("this is working")
  console.log(userRequest)
  spotify.search({ type: 'track', query: userRequest, limit: 1 },
    function (err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      } else

        // console.log(data.tracks.items);

        for (var i=0; i < data.tracks.items.length; i++) {
          // console.log(data.tracks.items[0].album.artists[0].name);
          console.log("Artists Name: " + data.tracks.items[0].album.artists[0].name)
          console.log("Songs Name: " + data.tracks.items[0].name)
          console.log("Song Link: " + data.tracks.items[0].preview_url)
          console.log("Album Name: " + data.tracks.items[0].album.name)
          

        }
    })  // .catch(function (error) {
  //   console.log("Error, please try to search again!");
  // })
}

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

    });
}


// check is userCommand is "do-what-it-says"
function doWhatItSays() {
  fs.readFile("random.txt", "utf8", function (error, data) {
    // If the code experiences any errors it will log the error to the console.
    if (error) {
      return console.log(error);
    }
    // We will then print the contents of data
    console.log(data);

    // Then split it by commas (to make it more readable)
    var output = data.split(",");
    // loop thru new output array
    userCommand = output[0];
    console.log("DWIS" + userCommand);
    userRequest = output[1];
    console.log("DWIS" + userRequest);
    if (userCommand === "spotify-this-song") {
      getSpotify(userRequest);
    } else if (userCommand === "movie-this") {
      movie(userRequest);
    } else if (userCommand === "concert-this") {
      concert(userRequest);
    }
  });
}
 // Use "fs" to read the random.txt file (hint, you will need to require fs! Look at activities 12 and 13)
  // The command will be whatever is before the comma. The search term will be whatever is after the comma.
  // Make the corresponding API call depending on what the command is.

//otherwise, display for user to try again 

