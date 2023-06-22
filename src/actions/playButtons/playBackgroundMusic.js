export function playbackgroundMusic(){
    document.addEventListener('keydown', e => {
        if (e.keyCode === 77) { // M
            const sound = document.querySelector('.sound');
            sound.play();
            sound.loop = true;
        }
    });
}