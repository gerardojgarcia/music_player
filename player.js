const musicContainer = document.querySelector('.music__container')
const playBtn = document.getElementById('play')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
const audio = document.getElementById('audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.music__container-progress')
const title = document.getElementById('title')
const cover = document.getElementById('cover')
const songLength = document.getElementById('tracktime')



// Song Title Array
const songs = [ 
    'Telex - Moskow Diskow',
     'Size - Olimpico', 
     'Valeria - Fairy Tale',
    'Size - Esta Noche',
     'Vandana - Cambios en el Tiempo'
                            ]

//Song Index

let songIndex = 0

loadSong(songs[songIndex])


function loadSong(song) {
 title.innerText = song
audio.src = `./music/${song}.mp3`
 cover.src = `./images/${song}.png`

}


function playSong(){
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}

function pauseSong() {
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')
    playBtn.querySelector('i.fas').classList.add('fa-play')

    audio.pause()
}

function prevSong () {
    songIndex --

    if (songIndex < 0) {
        songIndex = songs.length - 1 
    }

    loadSong(songs[songIndex])

    playSong()
    
}

function nextSong() {
    songIndex ++

    if (songIndex > songs.length - 1) {
        songIndex = 0
    }

    loadSong(songs[songIndex])
    playSong()
}


function updateProgress(e) {
    const {duration, currentTime} = e.target
    
    const progressPercent = (currentTime / duration) * 100

    progress.style.width = `${progressPercent}%`
}

let trackTime = 0

    

function showDuration (e){
    
    const trackTime = audio.currentTime / 60
    

    const trackTimes = trackTime.toFixed(2)
    const trackDuration = audio.duration / 60
    const trackLength = trackDuration.toFixed(2)
    songLength.innerText = trackTimes + ' / ' + trackLength
    console.log(trackTime, trackDuration)
} 
function setProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration 

    audio.currentTime = (clickX / width) * duration
    console.log(clickX)
}
//Event Listeners


//Play/Pause

playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')

    if (isPlaying) {
        pauseSong()
    } else {
        playSong()
    }

    showDuration()
})
    
//Forward/Pause

prevBtn.addEventListener('click', () => {
    prevSong()
    showDuration()
})

nextBtn.addEventListener('click', () => {
    nextSong()
    showDuration()
})

//Progress Indicator

audio.addEventListener('timeupdate', updateProgress)

//Jump-To Progress

progressContainer.addEventListener('click', setProgress)



//Continuous Play

audio.addEventListener('ended', nextSong)


// Track Time

audio.addEventListener('timeupdate', showDuration)




//  InnerHtml


const nowPlaying = document.getElementById('now-playing')
const popular = document.querySelector('#popular')
const randomEl = document.querySelector('#random')
const artistsEl = document.querySelector('#artists')
const genreEl = document.querySelector('#genres')
const playlistEl = document.querySelector('#playlist')
const musicEl = document.getElementById('music__container')
const mainBox = document.getElementById('main-box')
const subHeaderEl = document.getElementById('sub-header')

const popularAlbums = document.getElementById('popular-albums')

nowPlaying.addEventListener('click', function () {
    

    if (musicEl.style.opacity != '1') {
        musicEl.style.opacity='1'
        popularAlbums.style.opacity ='0'

        nowPlaying.classList.add('selected')
        popular.classList.remove ('selected')

    } else  {
        console.log('Already displayed')
    }
    
    
    
   
})


popular.addEventListener('click', function () {
    console.log('i was clicked')

    if (popularAlbums.style.opacity !='1') {
        popularAlbums.style.opacity = '1'
        musicEl.style.opacity='0'

        popular.classList.add('selected')

        nowPlaying.classList.remove('selected')



    } else {
        console.log('Already displayed')
    }


   
})


