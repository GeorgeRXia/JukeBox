function Songs (song, artist, songName, album, albumArt){
this.song = song;
this.artist = artist;
this.songName = songName; 
this.album = album;
this.albumArt= albumArt;


}

var viper = new Songs("viper.mp3");

function JukeBox(songs){

this.songLists = [];
this.songsLists.push(songs);


this.next = next;
this.pause = pause;
this.play = play;
this.rewind = rewing;
}

function next(){


var indexNumber = this.songLists.indexOf(currentSong) + 1;
this.songLists[indexNumber];

}
function pause(){

}
function play(){
	song.Playing.setAttribute("src", songToPlay);

}
function rewing(){


}


var songToPlay = viper.song;







document.addEventListener("click", function(){






})