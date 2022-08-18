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

function getApi() {
    var requestURL = 'https://api.musixmatch.com/ws/1.1/?&apikey=QTbUwuc4VmQH4fCYBn2UmCYq0CzG9SG8O2VNVfvr'

fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        console.log(data)
    })
}



function getLyrics() {
    var artistSearch = document.getElementById("artistSearch").value;
    document.getElementById("lyrics").textContent = "";
    $.ajax({
      type: "GET",
      data: {
        apikey: "QTbUwuc4VmQH4fCYBn2UmCYq0CzG9SG8O2VNVfvr",
        q_artist: artistSearch,
        format: "json",
        callback: "json_callback"
      },
      url: "https://api.musixmatch.com/ws/1.1/track.search",
      dataType: "json",
      jsonCallback: "json_callback",
      contentType: "application/json",
      success: function (data) {
        console.log(data);
        console.log(data.message.body.track_list[0].track.album_coverart_350x350);
        console.log(data.message.body.track_list[0].track.lyrics_id);
        var rand =
          data.message.body.track_list[
            Math.floor(Math.random() * data.message.body.track_list.length)
          ];
        console.log(rand.track.track_id);
        var thisTrack = rand.track.track_id;
        var thisPic = rand.track.album_coverart_350x350;
        console.log(thisPic);
  
        var p = document.createElement("p");
        p.textContent = thisTrack;
        p.id = thisTrack;
  
        document.getElementById("lyrics").appendChild(p).style.opacity = 0;
        document.getElementById("ghost").click();
      },
      error: function (jqXHR, textStatus, errorTh) {
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorTh);
      }
    });
  }
  
  function getLyricsNow() {
    var trackId = document.getElementById("lyrics").textContent;
    console.log(trackId);
    $.ajax({
      type: "GET",
      data: {
        apikey: "QTbUwuc4VmQH4fCYBn2UmCYq0CzG9SG8O2VNVfvr",
        track_id: trackId,
        format: "json",
        callback: "json_callback"
      },
      url: "https://api.musixmatch.com/ws/1.1/track.lyrics.get",
      dataType: "json",
      jsonCallback: "json_callback",
      contentType: "application/json",
      success: function (data) {
        console.log(data);
        console.log(data.message.body.lyrics.lyrics_body);
        var lyricsBody =
          data.message.body.lyrics.lyrics_body
            .split(/\s+/)
            .slice(0, 100)
            .join(" ") + "...";
  
        var j = document.createElement("p");
        j.textContent = lyricsBody;
        document.getElementById("lyrics").appendChild(j);
      },
      error: function (jqXHR, textStatus, errorTh) {
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorTh);
      }
    });
  }
  