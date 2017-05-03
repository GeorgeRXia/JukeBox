SC.initialize({
	client_id: 'f665fc458615b821cdf1a26b6d1657f6'

})
var sCloudAlbumArt;
var sCloudProfile = "https://soundcloud.com/brooklynhippy";
var sCloudSongPage = "https://soundcloud.com/jon-kwest/major-lazer-jessica-feat-ezra";
var sCloudDescription = "90 BPM Lover's Rock type refix slow grind biz";
// function Songs (song, artist, songName, album, albumArt, profilePage, genre, description, releaseYear)
var kWest = new SongsFromSoundCloud(99938838, "Kwest", "Major Lazer - Jessica feat. Ezra Koenig (Jon Kwest Slowed Town Mix)", "KWest Mix", "kWest", sCloudProfile, sCloudSongPage, "90bpm", sCloudDescription, "null");

var sCloudKwestSongName = "Nasty Na - They Dont Love You Nomore (freestyle) Ft K.West";

var kWest2 = new SongsFromSoundCloud(149078143, "Kwest",sCloudKwestSongName, "KWest Mix", "KWest2", sCloudProfile,  "https://soundcloud.com/nastyna215/nasty-na-they-dont-love-you-nomore-freestyle-ft-kwest", "Nasty Na", "Nasty Na New track", "null");

var firstJukeBox = new JukeBox();
firstJukeBox.addSong(kWest);
firstJukeBox.addSong(kWest2);



var buttons = document.getElementsByClassName("buttons");

for(var i = 0; i < buttons.length; i++){
	buttons[i].addEventListener("click", function(event){
console.log(this);
console.log(event.target);
	var operator = this.id;

	firstJukeBox.operation2(operator);

	});

}




function SongsFromSoundCloud (song, artist, songName, album, albumArt, profilePage, songPage, genre, description, releaseYear){

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

function JukeBox(){

	this.songsList= [];
	this.addSong = addSong;
	this.currentSongNum = 0;

	this.nextSong = nextSong;
	this.previousSong = previousSong;


	this.operation2 = operation2;
	this.soundCloudRunner = soundCloudRunner;
	this.soundCloudRunnerPause = soundCloudRunnerPause;
	this.soundCloudRunnerPlay = soundCloudRunnerPlay;

	var juke = this;


	function nextSong(){
		
		if(this.currentSongNum >= (this.songsList.length - 1)){
			this.currentSongNum = 0;

			var nextSongNum = this.currentSongNum;
			var nextSong = this.songsList[nextSongNum].song;

			this.currentSong = nextSong;




		}else{
			
			this.currentSongNum += 1 ;
			var nextSongNum = this.currentSongNum;

			var nextSong = this.songsList[nextSongNum].song;
			
			this.currentSong = nextSong;
		

	
		}
	}
	


	function previousSong(){
		if(this.currentSongNum <= 0 ){

			this.currentSongNum = (this.songsList.length - 1);
			
			var previousSongNum = this.currentSongNum;
			this.currentSong = this.songsList[previousSongNum].song;
		
		

		} else {
			
			this.currentSongNum -= 1;
			
			var previousSongNum = this.currentSongNum;

			var nextSong = this.songsList[previousSongNum].song;
		
			this.currentSong = nextSong;
		
		}

	}

	function addSong(song){
		this.songsList.push(song);

	}


	function operation2(operator) {
		
		if(operator === "rewind"){
			
			this.previousSong();
			this.soundCloudRunner();
			
		}
		
		if(operator === "play"){
			this.soundCloudRunner();

		

		}
		
		if(operator === "pause"){
			// this.soundCloudRunnerPause();
			console.log(operator);
			this.soundCloudRunnerPlay();
			this.soundCloudRunnerPause();
		}
		
		if(operator === "next"){
			
			this.nextSong();
			this.soundCloudRunner();
			
			
		}

	}

	function soundCloudRunner(){
			var sCloudSongNum = this.currentSongNum;
					
					var sCloudSongId = firstJukeBox.songsList[sCloudSongNum].song;
		
					var sCloudSongPlay = "/tracks/" + sCloudSongId;

					SC.stream(sCloudSongPlay).then(function(player){
						// this.player = player;
					this.player = player;
					console.log(this);
					
					
					this.player.play();

					
					// soundCloudRunnerPlay();
					})

	}
	function soundCloudRunnerPause(){
		window.player.pause();
		console.log(this)
		console.log(this.player)
		

		console.log(juke.player)
				
	}
	function soundCloudRunnerPlay(){
		window.player.play();
	
	}




}