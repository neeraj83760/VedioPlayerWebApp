const video = document.querySelector('video')

const progressRange = document.querySelector('.progress-range')

const progressBar = document.querySelector('.progress-bar')

const playBtn = document.getElementById('play-btn')

const volumeIcon = document.getElementById('volume-icon')

const volumeRange = document.querySelector('.volume-range')

const volumeBar = document.querySelector('.volume-bar')

const currentTime = document.querySelector('.time-elapsed')

const duration  = document.querySelector('.time-duration')

const fullscreenBtn = document.querySelector('.fullsreen')

// Play & Pause ----------------------------------- //

function showPlayIcon(){
    
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');  

}

function togglePlay(){

    if(video.paused){

        video.play();
        playBtn.classList.replace('fa-play', 'fa-pause');
        playBtn.setAttribute('title', 'Pause'); 
    }
    else{
            video.pause();
            showPlayIcon();
        }
}

// On Video End we show the play button Icon

video.addEventListener('ended', showPlayIcon);

// Progress Bar ---------------------------------- //

// Update the Progessbar as the Video Plays

// Calculate display time format 

function displayTime(time){


    const minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    
    seconds = seconds > 9 ? seconds : `0${seconds}`;
    // console.log(minutes, seconds); 

    return `${minutes}: ${seconds}`;


}

function updateProgess(){

    // console.log('CurrentTime', video.currentTime, 'Duration', video.duration);
    progressBar.style.width = `${(video.currentTime / video.duration) * 100}%` 

    currentTime.textContent = `${displayTime(video.currentTime)} / `;

    duration.textContent  = `${displayTime(video.duration)}`;
    
    
    
}

// Volume Controls --------------------------- //



// Change Playback Speed -------------------- //



// Fullscreen ------------------------------- //


// Event Listeners 

playBtn.addEventListener('click', togglePlay);

video.addEventListener('click', togglePlay);

video.addEventListener('timeupdate', updateProgess)

video.addEventListener('canplay', updateProgess); 






