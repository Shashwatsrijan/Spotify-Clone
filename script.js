console.log("welcome to stify");

//initialize the variables
let songsIndex =  0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItems'));
let masterSongName = document.getElementById("masterSongName");


let songs=[
    {songName:"Let Me Love You", filePath: 'songs/1.mp3' , coverPath: 'covers/cover1.jpg'},
    {songName:"Perfect - Ed Sheeran", filePath: 'songs/2.mp3' , coverPath: 'covers/cover2.jpg'},
    {songName:"AR Rahman's Best", filePath: 'songs/3.mp3' , coverPath: 'covers/cover3.jpg'},
    {songName:"Janmo Janam - Yaseer Desai", filePath: 'songs/4.mp3' , coverPath: 'covers/cover4.jpg'},
    {songName:"Yeh Aaina - Shreya Ghoshal", filePath: 'songs/5.mp3' , coverPath: 'covers/cover5.jpg'},
    {songName:"Ruk Ja O dil deewane", filePath: 'songs/6.mp3' , coverPath: 'covers/cover6.jpg'}
    // {songName:"Salaam E Ishq", filePath: 'songs/1.mp3' , coverPath: '1.jpg'},
    // {songName:"Salaam E Ishq", filePath: 'songs/1.mp3' , coverPath: '1.jpg'},
    // {songName:"Salaam E Ishq", filePath: 'songs/1.mp3' , coverPath: '1.jpg'},
    // {songName:"Salaam E Ishq", filePath: 'songs/1.mp3' , coverPath: '1.jpg'}
]

songItems.forEach((element,i) => {
    // console.log(element,i)
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
    
});




//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;

    }
})


audioElement.addEventListener('timeupdate' , ()=>{
    //update seekbar
    let progress=parseInt((audioElement.currentTime/audioElement.duration)*100);//this will give the progress in percent.
    myProgressBar.value=progress;

})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})


const makeAllPlays=()=>{

    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
           
    
    
    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click' , (e)=>{
        // console.log(e.target);
        makeAllPlays();
        
        songsIndex= parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src = `songs/${songsIndex+1}.mp3`;
        masterSongName.innerText = songs[songsIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");

    })

})

document.getElementById('next').addEventListener('click' , ()=>{
    if(songsIndex>=5){
        songsIndex=0;
    }
    else{
        songsIndex+=1;
    }
    audioElement.src = `songs/${songsIndex+1}.mp3`;
    masterSongName.innerText = songs[songsIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
})

document.getElementById('previous').addEventListener('click' , ()=>{
    if(songsIndex<=0){
        songsIndex=0;
    }
    else{
        songsIndex-=1;
    }
    audioElement.src = `songs/${songsIndex+1}.mp3`;
    masterSongName.innerText = songs[songsIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
})

// masterSongName.