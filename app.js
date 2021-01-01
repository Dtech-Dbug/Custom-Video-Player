/* Get elements*/
const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider')






/* Build the functions*/

function togglePlay(){
    

    /* using ternary 
    const method =video.paused ? "play" : "pause"
    video[method]();*/

    if(video.paused){
        video.play();
    } else{
        video.pause()
    }
}

function updateButton(){
    const icon = this.paused ? "▶️"  : "⏸️";
    //console.log(icon);
    toggle.textContent = icon
}


function skip(click){
    console.log("skip")
    let value = this.dataset
    console.log(value)

    video.currentTime += parseFloat(value.skip) 
}
 function handleChangeUpdate(){
     video[this.name] = this.value;
     console.log(this.name)
     console.log(this.value)

 }

 function handleProgress(){
     const percent = (video.currentTime / video.duration) * 100
     progressBar.style.flexBasis = `${percent}%`

 }

 function scrub(e){
     console.log(e)
 }



/* Hooking event listeners*/

video.addEventListener('click' , togglePlay)
video.addEventListener('play' , updateButton)
video.addEventListener('pause' , updateButton)
video.addEventListener('timeupdate' , handleProgress)

toggle.addEventListener('click' , togglePlay)

skipButtons.forEach(button => button.addEventListener('click' , skip))

ranges.forEach(range => range.addEventListener('change' , handleChangeUpdate))

progress.addEventListener('click' , scrub)