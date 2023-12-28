console.log("Welcome to spotify");

// initialize variable...
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressbar = document.getElementById('progressbar');
let gif = document.getElementById('gif');
let info = document.getElementById('info');

// Array
let songs = [
    { songName: "Let Me Love You", filePath: "1.mp3", coverPath: "1.jpg" },
    { songName: "Shape Of You", filePath: "2.mp3", coverPath: "2.jpg" },
    { songName: "Mockingbird", filePath: "3.mp3", coverPath: "3.jpg" },
    { songName: "Arcade", filePath: "4.mp3", coverPath: "4.jpg" },
    { songName: "E.T. ft. Kanye West", filePath: "5.mp3", coverPath: "5.jpg" },
    { songName: "Courtesy Call", filePath: "6.mp3", coverPath: "6.jpg" },
    { songName: "Unstoppable", filePath: "7.mp3", coverPath: "7.jpg" },
    { songName: "Believer", filePath: "8.mp3", coverPath: "8.jpg" },
    { songName: "Blank Space", filePath: "9.mp3", coverPath: "9.jpg" },
    { songName: "Bones", filePath: "10.mp3", coverPath: "10.jpg" },
]

// Handle pause/play click
// Handle masterPlay click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        // If audio is paused or not started, play the audio
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;

        // Convert play icon to pause for the clicked song item
        document.getElementById(songIndex.toString()).classList.remove('fa-circle-play');
        document.getElementById(songIndex.toString()).classList.add('fa-circle-pause');
    } else {
        // If audio is playing, pause the audio
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

        // Convert pause icon to play for the clicked song item
        document.getElementById(songIndex.toString()).classList.remove('fa-circle-pause');
        document.getElementById(songIndex.toString()).classList.add('fa-circle-play');
    }
});


// update time event...
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');

    // update progressbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    progressbar.value = progress;
})

// changing progress bar
progressbar.addEventListener('change', () => {
    audioElement.currentTime = (progressbar.value * audioElement.duration) / 100;
})

// convert pause icon to play for all other songs except curretly playing song
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

// changing songs by click play icon in front of song name
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        // Check if the clicked song is already playing
        if (e.target.classList.contains('fa-circle-pause')) {
            // If it is, pause the audio
            audioElement.pause();
            e.target.classList.remove('fa-circle-pause');
            e.target.classList.add('fa-circle-play');
            masterPlay.classList.remove('fa-circle-pause');
            masterPlay.classList.add('fa-circle-play');

            gif.style.opacity = 0;
        } else {
            // If it's not playing, stop any currently playing song and play the clicked song
            makeAllPlays();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audioElement.src = `${songIndex}.mp3`;
            console.log(songs[songIndex]);
            info.innerText = songs[songIndex - 1].songName;

            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            gif.style.opacity = 1;
        }
    })
})

// changing song & song info on clicking next icon 
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 10) {
        songIndex = 1
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `${songIndex}.mp3`;
    console.log(songs[songIndex]);
    info.innerText = songs[songIndex - 1].songName;

    audioElement.currentTime = 0;
    audioElement.play();
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }

})

// changing song & song info on clicking previous icon 
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 1
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `${songIndex}.mp3`;
    console.log(songs[songIndex]);
    info.innerText = songs[songIndex - 1].songName;

    audioElement.currentTime = 0;
    // audioElement.play();
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

progressbar.addEventListener('ended', next);