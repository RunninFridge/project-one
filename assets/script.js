// declaring variables 
var youTubeBtn = document.getElementById('youtube-btn');
var appleMusicBtn = document.getElementById('apple-music-btn');
var spotifyBtn = document.getElementById('spotify-btn');
const reset = document.getElementById('results');


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
//on click search btn using api, api key to search for lyrics 
$('#search-btn').on('click', function(){
    const lyric = $('#search-field').val();
    $.getJSON(`https://api.musixmatch.com/ws/1.1/track.search?format=jsonp&callback=callback&q_lyrics=${lyric}&apikey=8c6ba3b63ecfe089c69bf57ce2429746&callback=?`
, function(data) {  
    //console.log(data);

//loop for grabbing the track names and appending them to the ol by creating an li
    var tracklist = data.message.body.track_list;
    for (var i = 0; i < tracklist.length; i++) {
        var tracknameslist = document.createElement('li');
        document.getElementById('results').appendChild(tracknameslist);
    // console.log(tracklist[i].track.track_name);
        var tracknames = tracklist[i].track.track_name;
        tracknameslist.innerHTML = tracknames;
        }
        return;
    })
});

// list of results set into local storage -ar

var results = document.getElementsByClassName('search-results'); 

localStorage.setItem('results', JSON.stringify(results));
 
var storedResults = JSON.parse(localStorage.getItem('search-results'));
