var youTubeBtn = document.getElementById("youTubeBtn");
var appleMusicBtn = document.getElementById("appleMusicBtn");
var spotifyBtn = document.getElementById("spotifyBtn");
var Genius = require("genius-lyrics"); // for genius ?
var client = new client("BOV6yaftuJuARA2ojkIunAabxrVWK-DmjLWuT5JHjy0UYAnqon9Cku0dY4E1YM0B"); //for genius ??

//lets you open links in new tabs onclick - vm
youTubeBtn.onclick = function() {
    window.open('https://youtube.com/');
};

appleMusicBtn.onclick = function() {
    window.open('https://music.apple.com/us/browse/');
};

spotifyBtn.onclick = function() {
    window.open('https://open.spotify.com/');
};



var searches = client.songs.search("");

// fetching songs from genius -vm
var firstSong = searches[0];
console.log("About the Song:\n", firstSong, "\n");

// fetching lyrics from genius -vm
var lyrics = firstSong.lyrics();
console.log("Lyrics of the Song:\n", lyrics, "\n");

// fetching an artist from genius -vm
var artist = client.artists.get();
console.log("About the Artist:\n", artist, "\n");