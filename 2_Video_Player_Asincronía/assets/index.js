
      const video = document.querySelector("video");
      const button = document.querySelector("button");
      let play = false;

      function MediaPlayer(config) {
          this.media = config.el
      }

      MediaPlayer.prototype.play = function(){
        this.media.play();
      };

      MediaPlayer.prototype.pause = function() {
        this.media.pause();
      };

      const player = new MediaPlayer({el : video});

      button.onclick = () => {
        if (!play) {
            player.play();
            play = true;
        } else {
            player.pause();
            play = false;
        }
      }