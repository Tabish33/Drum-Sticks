window.addEventListener('keydown',function(e){
      var audio = document.querySelector(`audio[data-key ="${e.keyCode}" ]`)
      var key = document.querySelector(`.key[data-key ="${e.keyCode}" ]`)

      if(audio == null) return;
      key.classList.add('playing');
      audio.currentTime = 0;
      audio.play();

      var keys = document.querySelectorAll('.key');
      keys.forEach(function(k){
              console.log(k);
              k.addEventListener('transitionend',removeTransition)});

      function removeTransition(){
        this.classList.remove('playing');
      }
})
