var youTubeBtn = document.getElementById("youtube-btn");
var appleMusicBtn = document.getElementById("apple-music-btn");
var spotifyBtn = document.getElementById("spotify-btn");



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

$('#search-btn').on('click', function(event){
    const lyric = $('#search-field').val()
    $.getJSON(`https://api.musixmatch.com/ws/1.1/track.search?format=jsonp&callback=callback&q_lyrics=${lyric}&apikey=8c6ba3b63ecfe089c69bf57ce2429746&callback=?`
, function(data) {  
    console.log(data);
    const tracks = data.message.body.track_list.q_track;
    console.log(tracks)
    });
});
