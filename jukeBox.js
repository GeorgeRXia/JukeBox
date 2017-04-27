// var sCloudSong, sCloudProfile, sCloudArtist, sCloudTitle, sCloudDescription, sCloudGenre, sCloudReleaseYear, sCloudAlbumArt;

SC.initialize({
	client_id: 'f665fc458615b821cdf1a26b6d1657f6'

})

// SC.get("/tracks", {
// q: "kwest"


// }).then(function(response){

//  sCloudSong = response[0].id;
//  sCloudProfile = response[0].permalink_url;
//  sCloudArtist = response[0].tag_list;
//  sCloudTitle = response[0].title;
//  sCloudDescription = response[0].description;
//  sCloudGenre = response[0].genre;
//  sCloudReleaseYear = response[0].release_year;
//  sCloudAlbumArt = response[0].artwork_url;

// console.log(response);


// })


var sCloudAlbumArt;
var sCloudProfile = "https://soundcloud.com/brooklynhippy";
var sCloudSongPage = "https://soundcloud.com/jon-kwest/major-lazer-jessica-feat-ezra";
var sCloudDescription = "90 BPM Lover's Rock type refix slow grind biz";
// function Songs (song, artist, songName, album, albumArt, profilePage, genre, description, releaseYear)
var kWest = new SongsFromSoundCloud(99938838, "Kwest", "Major Lazer - Jessica feat. Ezra Koenig (Jon Kwest Slowed Town Mix)", "KWest Mix", "kWest", sCloudProfile, sCloudSongPage, "90bpm", sCloudDescription, "null");

var sCloudKwestSongName = "Nasty Na - They Dont Love You Nomore (freestyle) Ft K.West";

var kWest2 = new SongsFromSoundCloud(149078143, "Kwest",sCloudKwestSongName, "KWest Mix", "KWest2", sCloudProfile,  "https://soundcloud.com/nastyna215/nasty-na-they-dont-love-you-nomore-freestyle-ft-kwest", "Nasty Na", "Nasty Na New track", "null");

var song = document.getElementById("song");
var songName = document.getElementsByClassName("songName")[0];
var artistName = document.getElementsByClassName("artistName")[0];

//function Songs (song, artist, songName, album, albumArt, profilePage, genre, description, releaseYear)
var starboy = new Songs("Starboy.mp3", "The Weeknd", "Starboy", "Starboy", "starboy");
var partyMonster = new Songs("Partymonster.mp3", "The Weeknd", "Party Monster", "Starboy", "starboy");
var dianeYoung = new Songs("Dianeyoung.mp3", "Vampire Weekend", "Diane Young", "Modern Vampires of the City", "modernVampire");

var firstJukeBox = new JukeBox(starboy);
firstJukeBox.addSong(partyMonster);
firstJukeBox.addSong(dianeYoung);
firstJukeBox.addSong(kWest);
// firstJukeBox.addSong(kWest2);

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

		var sCloudSongNum = 3;
				console.log(sCloudSongNum);
				var sCloudSongId = firstJukeBox.songsList[sCloudSongNum].song;
	
				var sCloudSongPlay = "/tracks/" + sCloudSongId;

				SC.stream(sCloudSongPlay).then(function(player){

				// player.play();
				firstJukeBox.player = player;

				})


function operation(operator) {
	if(operator === "rewind"){
		firstJukeBox.previousSong();
		firstJukeBox.player.pause();
		if(firstJukeBox.soundCloudSong === true){
			
			firstJukeBox.player.play();
		} else{
			
			firstJukeBox.playSong();


		}
	

	}
	
	if(operator === "play"){
		if(firstJukeBox.soundCloudSong === true){
			firstJukeBox.nextSong();
			firstJukeBox.player.play();

		} else{

			 firstJukeBox.playSong();
		}
	}
	
	if(operator === "pause"){
		if(firstJukeBox.soundCloudSong === true){
			
			firstJukeBox.player.pause();
		}else{
			firstJukeBox.pauseSong();
		}
	}
	
	if(operator === "next"){
		firstJukeBox.nextSong();
		firstJukeBox.player.pause();
		if(firstJukeBox.soundCloudSong === true){	
			
			firstJukeBox.player.play();
		}else{
			
			firstJukeBox.playSong();
		}
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




function Songs (song, artist, songName, album, albumArt, profilePage, songPage, genre, description, releaseYear){
	
	this.song = song;
	this.artist = artist;
	this.songName = songName; 
	this.album = album;
	this.albumArt= albumArt;
	this.profilePage = profilePage;
	this.songPage = songPage;
	this.genre = genre;
	this.description = description;
	this.releaseYear = releaseYear;

}

function SongsFromSoundCloud(){
	this.soundCloud = true;
	Songs.apply(this, arguments);


}


function JukeBox(songPick){

	this.songsList = [];
	this.songsList.push(songPick);

	this.soundCloudSong = this.songsList[0].soundCloud;
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

	// this.soundCloudPlayed = soundCloudPlayed;
	
	// this.sCloudPlayer = sCloudPlayer;
	// this.player;
	// this.sCloudPlay = sCloudPlay;
	// this.sCloudPause = sCloudPause;

}

	function nextSong(){
		
		if(this.currentSongNum >= (this.songsList.length - 1)){
			this.currentSongNum = 0;

			var nextSongNum = this.currentSongNum;
			var nextSong = this.songsList[nextSongNum].song;

			this.currentSong = nextSong;

			this.soundCloudSong = this.songsList[nextSongNum].soundCloud;
		this.songNameDisplay(nextSongNum);
		this.artistNameDisplay(nextSongNum);
		this.albumArtDisplay(nextSongNum);
			// this.playSong();
			this.pauseSong();

		}else{
			
			this.currentSongNum += 1 ;
			var nextSongNum = this.currentSongNum;

			var nextSong = this.songsList[nextSongNum].song;
			this.soundCloudSong = this.songsList[nextSongNum].soundCloud;
			this.currentSong = nextSong;
			// this.playSong();
		this.songNameDisplay(nextSongNum);
		this.artistNameDisplay(nextSongNum);
		this.albumArtDisplay(nextSongNum);
			this.pauseSong();
		}
	}
	
	function pauseSong(){
		song.pause();

	}
	
	function playSong(){
		var songToPlay = this.currentSong;
		var songInfo = this.currentSongNum;
		song.setAttribute("src", songToPlay);
	
		// this.songNameDisplay(songInfo);
		// this.artistNameDisplay(songInfo);
		// this.albumArtDisplay(songInfo);
		song.play();

	
	}

	function previousSong(){
		if(this.currentSongNum <= 0 ){

			this.currentSongNum = (this.songsList.length - 1);
			
			var previousSongNum = this.currentSongNum;
			this.currentSong = this.songsList[previousSongNum].song;
			this.soundCloudSong = this.songsList[previousSongNum].soundCloud;
			// this.playSong();

		this.songNameDisplay(previousSongNum);
		this.artistNameDisplay(previousSongNum);
		this.albumArtDisplay(previousSongNum);
			this.pauseSong();
		} else {
			
			this.currentSongNum -= 1;
			
			var previousSongNum = this.currentSongNum;

			var nextSong = this.songsList[previousSongNum].song;
			this.soundCloudSong = this.songsList[previousSongNum].soundCloud;
			this.currentSong = nextSong;
			// this.playSong();
		this.songNameDisplay(previousSongNum);
		this.artistNameDisplay(previousSongNum);
		this.albumArtDisplay(previousSongNum);
			this.pauseSong();
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
		msg = "Artist: " + this.songsList[i].artist + "</br>";
		msg += "Profile: " + this.songsList[i].profilePage + "</br>";
		msg += "Song Page: " + this.songsList[i].songPage + "</br>";
		msg += "Description: " + this.songsList[i].description + "</br>";
		msg += "Genre: " + this.songsList[i].genre + "</br>";
		msg += "Release Date: " + this.songsList[i].releaseYear;
 		artistName.innerHTML = msg; 
	}

	function albumArtDisplay(i){
		var albumArt = this.songsList[i].albumArt;
		albumArt = "andrewWK" + " " + albumArt;

		andrewWK.setAttribute("class", albumArt);

	}

// function soundCloudPlayed(){

// this.currentSongNum += 1;


// }



// function sCloudPlayer(){


// }


// function sCloudPlay(){
// SC.stream("/tracks/117724592").then(function(player){

// firstJukeBox.sCloudPlay1 = player;


// })

// }


// function sCloudPause(){
// SC.stream("/tracks/117724592").then(function(player){

// player.pause();


// })

// }








