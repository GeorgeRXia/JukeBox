var song = document.getElementById("song");
var songName = document.getElementsByClassName("songName")[0];
var artistName = document.getElementsByClassName("artistName")[0];


var starboy = new Songs("Starboy.mp3", "The Weeknd", "Starboy", "Starboy", "starboy");
var partyMonster = new Songs("Partymonster.mp3", "The Weeknd", "Party Monster", "Starboy", "starboy");
var dianeYoung = new Songs("Dianeyoung.mp3", "Vampire Weekend", "Diane Young", "Modern Vampires of the City", "modernVampire");

var firstJukeBox = new JukeBox(starboy);
firstJukeBox.addSong(partyMonster);
firstJukeBox.addSong(dianeYoung);

window.addEventListener("load", function(){
	var songIndex = firstJukeBox.currentSongNum;

	firstJukeBox.songNameDisplay(songIndex);
	firstJukeBox.artistNameDisplay(songIndex);

})

document.addEventListener("keyup", function(){
	if (event.keyCode = 27){

		firstJukeBox.pauseSong();
	}

})

var andrewWK = document.getElementsByClassName("andrewWK")[0];

andrewWK.addEventListener("click", function(){
	firstJukeBox.playSong();

})

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



var starboy = document.getElementById("starboy");
var partyMonster = document.getElementById("partyMonster");
var dianeYoung = document.getElementById("dianeyoung");

starboy.addEventListener("click", function(){

	firstJukeBox.currentSong = firstJukeBox.songsList[0].song;
	firstJukeBox.currentSongNum = 0;
	firstJukeBox.playSong();
})

partyMonster.addEventListener("click", function(){

	firstJukeBox.currentSong = firstJukeBox.songsList[1].song;
	firstJukeBox.currentSongNum = 1;
	firstJukeBox.playSong();
})

dianeYoung.addEventListener("click", function(){

	firstJukeBox.currentSong = firstJukeBox.songsList[2].song;
	firstJukeBox.currentSongNum = 2;
	firstJukeBox.playSong();
})

var random = document.getElementById("random");

random.addEventListener("click", function(){
	
	var totalSongAmount = firstJukeBox.songsList.length - 1;
	var random = Math.round(Math.random()*totalSongAmount);

	firstJukeBox.currentSong = firstJukeBox.songsList[random].song;
	firstJukeBox.currentSongNum = random;
	firstJukeBox.playSong();

})


song.addEventListener("ended", function(){

	firstJukeBox.nextSong();
})




function Songs (song, artist, songName, album, albumArt){
	this.song = song;
	this.artist = artist;
	this.songName = songName; 
	this.album = album;
	this.albumArt= albumArt;

}


function JukeBox(songPick){

	this.songsList = [];
	this.songsList.push(songPick);

	this.currentSong = this.songsList[0].song;
	this.currentSongNum = 0;

	this.nextSong = nextSong;
	this.pauseSong = pauseSong;
	this.playSong = playSong;
	this.previousSong = previousSong;
	this.songNameDisplay = songNameDisplay;
	this.artistNameDisplay = artistNameDisplay;
	this.albumArtDisplay = albumArtDisplay;
	
	this.addSong = addSong;

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
		var songInfo = this.currentSongNum;
		song.setAttribute("src", songToPlay);
	
		this.songNameDisplay(songInfo);
		this.artistNameDisplay(songInfo);
		this.albumArtDisplay(songInfo);
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

	function songNameDisplay(i){
		var msg = "";
		msg = this.songsList[i].songName;

		songName.innerHTML =  "Song: " + msg;
	}

	function artistNameDisplay(i){
		var msg = "";
		msg = this.songsList[i].artist;

		artistName.innerHTML = "Artist: " + msg;
	}

	function albumArtDisplay(i){
		var albumArt = this.songsList[i].albumArt;
		albumArt = "andrewWK" + " " + albumArt;

		andrewWK.setAttribute("class", albumArt);

	}

}





