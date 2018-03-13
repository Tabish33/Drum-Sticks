window.addEventListener('keydown',function(e){
      var audio = document.querySelector(`audio[data-key ="${e.keyCode}" ]`)
      audio.play();
})
