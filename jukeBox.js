function Songs (song, albumArt, artist, songName, album){
	this.song = song;
	this.artist = artist;
	this.songName = songName; 
	this.album = album;
	this.albumArt= albumArt;

}

var song = document.getElementById("song");

function JukeBox(song){

	this.songsList = [];
	this.songsList.push(song);

	this.currentSong = this.songsList[0].song;
	this.currentSongNum = 0;

	this.nextSong = nextSong;
	this.pauseSong = pauseSong;
	this.playSong = playSong;
	this.previousSong = previousSong;
	
	this.addSong = addSong;

}

function nextSong(){
	
	if(this.currentSongNum >= (this.songsList.length - 1)){
		this.currentSongNum = 0;

		var nextSongNum = this.currentSongNum;
		var nextSong = this.songsList[nextSongNum].song;

		this.currentSong = nextSong;

		this.playSong();

	}else{
		
		this.currentSongNum += 1 ;
		var nextSongNum = this.currentSongNum;

		var nextSong = this.songsList[nextSongNum].song;
		
		this.currentSong = nextSong;
		this.playSong();
	}
}

function pauseSong(){
	song.pause();

}


function playSong(){
	var songToPlay = this.currentSong;
	
	song.setAttribute("src", songToPlay);
	
	song.play();

}

function previousSong(){
	
	if(this.currentSongNum <= 0 ){

		this.currentSongNum = (this.songsList.length - 1);
		
		var previousSongNum = this.currentSongNum;
		this.currentSong = this.songsList[previousSongNum].song;
		
		this.playSong();
		
	} else {
		
	this.currentSongNum -= 1;
	
	var previousSongNum = this.currentSongNum;

	var nextSong = this.songsList[previousSongNum].song;
	
	this.currentSong = nextSong;
	this.playSong();

	}

}

function addSong(song){
	this.songsList.push(song);

}


var buttons = document.getElementsByClassName("buttons");

for(var i = 0; i < buttons.length; i++){
	buttons[i].addEventListener("click", function(){

	var operator = event.target.id;

	operation(operator);

	});

}

function operation(operator) {
	if(operator === "rewind"){

	firstJukeBox.previousSong();

	}
	
	if(operator === "play"){
		firstJukeBox.playSong();

	}
	
	if(operator === "pause"){

		firstJukeBox.pauseSong();

	}
	
	if(operator === "next"){
	 	
		firstJukeBox.nextSong();

	}

}

var starboy = new Songs("Starboy.mp3", "starboyAlbum.jpg");
var partyMonster = new Songs("Partymonster.mp3", "starboyAlbum.jpg");
var dianeYoung = new Songs("Dianeyoung.mp3");

var firstJukeBox = new JukeBox(starboy);
firstJukeBox.addSong(partyMonster);
firstJukeBox.addSong(dianeYoung);


function albumModalArt (event){

var albumPicture = event.target.id;



}


