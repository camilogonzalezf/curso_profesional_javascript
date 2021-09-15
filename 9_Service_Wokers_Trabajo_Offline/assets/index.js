
      import AutoPlay from '../plugins/AutoPlay.js'
      import AutoPause from '../plugins/AutoPause.js'
      import MediaPlayer from './MediaPlayer.js'

      const video = document.querySelector("video");
      const button = document.querySelector("#playButton");
      const muteButton = document.querySelector("#muteButton");
      const player = new MediaPlayer(
            {el : video, plugins: [new AutoPlay() , new AutoPause()]
            });
      
      button.onclick = () => player.togglePlay();
      muteButton.onclick = () => player.toggleMute();


      if('serviceWorker' in navigator){
            navigator.serviceWorker.register('/sw.js').catch(error => {
                  console.log(error.message);
            });
      }



