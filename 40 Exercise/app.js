// 40. Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
// Define the function make_album
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    // If tracks parameter is provided, add it to the album object
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Function call to create an album without specifying tracks
var album1 = make_album('Artist 1', 'Album Title 1');
console.log(album1);
// Function call to create an album with specifying tracks
var album2 = make_album('Artist 2', 'Album Title 2', 12);
console.log(album2);
// Function call to create another album without specifying tracks
var album3 = make_album('Artist 3', 'Album Title 3');
console.log(album3);
