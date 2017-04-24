function Songs (song, artist, songName, album, albumArt){
this.song = song;
this.artist = artist;
this.songName = songName; 
this.album = album;
this.albumArt= albumArt;


}

var viper = new Songs("viper.mp3");

function JukeBox(song){

this.songsList = [];
this.songsList.push(songs);


this.next = next;
this.pause = pause;
this.play = play;
this.rewind = rewind;

this.addSong = addSong;
}

var firstJukeBox = new JukeBox(viper);

function next(){


var indexNumber = this.songsList.indexOf(currentSong) + 1;
var songToPlay = this.songsList[indexNumber];

JukeBox.play(songToPlay);

}
function pause(){
	song.removeAttribute("src");
}
function play(songToPlay){
	song.setAttribute("src", songToPlay);

}
function rewind(){


}

function addSongs(song){

this.songLists.push(song);

}

var song = document.getElementById("song");

var currentSong = song.getAttribute("src");




var buttons = document.getElementsByClassName("buttons");

for(var i = 0; i < buttons.length; i++){

var buttons[i] = document.addEventListener("click", function(){

var operator = event.target.innerHTML;

operation(operator);

})

}

function operation(operator) {

if(operator === "<<"){



}else if(operator === ">"){




}else if(opertor === "||"){



}else if(operator === ">>"){



}

}


