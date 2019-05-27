const keys = document.getElementsByClassName('key');
console.log(keys);
for(let i = 0; i < keys.length; i++){
    keys[i].addEventListener('click', function(){
        const keyNum = keys[i].attributes["data-key"].nodeValue;
        playSound(keyNum);
        keys[i].classList.add('playing');
    })
    keys[i].addEventListener('transitionend', removeTransition);
}
function playSound(num){
    const sound = document.querySelector(`audio[data-key="${num}"]`);
    sound.currentTime = 0;
    sound.play();
}
function removeTransition(e){
    console.log(e);
    this.classList.remove('playing');
}
window.addEventListener('keydown', function(e){
    const key = e.keyCode;
    for(let i = 0; i < keys.length; i++){
        if(keys[i].attributes["data-key"].nodeValue == key){
            playSound(key);
            keys[i].classList.add('playing');
        }
    }
});
