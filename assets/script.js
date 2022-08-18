var youTubeBtn = document.getElementById("youTubeBtn");
var appleMusicBtn = document.getElementById("appleMusicBtn");
var spotifyBtn = document.getElementById("spotifyBtn");



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

https://api.musixmatch.com/ws/1.1/......?&apikey=QTbUwuc4VmQH4fCYBn2UmCYq0CzG9SG8O2VNVfvr