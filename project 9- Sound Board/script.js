const sounds = ['Notification','Box Box','Lewis hamilton','leclerc','max verstappen','ferrari']

sounds.forEach(sound =>{
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    //plays all sound if clicked while playing another
    // btn.addEventListener('click',() => {
    //     document.getElementById(sound).play()
    // })

    btn.addEventListener('click',() => {
        stopSounds()
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSounds(){
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime =0
    })
}