function updateTime() {
  var now = new Date();
  var options = { timeZone: 'Africa/Cairo', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
  var timeString = now.toLocaleString('en-US', options);
  document.getElementById('clock').textContent = timeString;
}

// Update time every second
setInterval(updateTime, 1000);



  

  console.clear();

  const { gsap } = window;
  
  
  
  document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('button');
  
    buttons.forEach(function(button) {
      button.addEventListener('click', function() {
        var link = this.dataset.link;
        if (link) {
          window.open(link);
        }
      });
    });
  });
  
  var playButton = document.getElementById("playButton");
  var playIcon = document.getElementById("playIcon");
  var audio = document.getElementById("music");
  
  playButton.addEventListener("click", function() {
    if (audio.paused) {
      audio.play();
      playButton.classList.add("active");
    } else {
      audio.pause();
      playButton.classList.remove("active");
    }
  });
  
  
  function handleMouseLeave(e) {
    isStuck = false;
    gsap.to(cursorOuter, 0.2, {
      width: cursorOuterOriginalState.width,
      height: cursorOuterOriginalState.width,
      borderRadius: "50%",
      backgroundColor: "transparent",
    });
  }
  
  
  
  
  const buttonStart = document.querySelector('.button-start');
  
  
  
  const clickwn = document.querySelector('.clickwn');
  
  
  document.addEventListener("DOMContentLoaded", function () {
      const music = document.querySelector(".music");
      const buttonStart = document.querySelector('.button-start');
      const  kissMyAss = document.querySelector('.clickwn');
      const backgroundVideo1 = document.getElementById('background-video-1');
      const backgroundVideo2 = document.getElementById('background-video-2');
      const backgroundVideo3 = document.getElementById('background-video-3');
      const backgroundVideo4 = document.getElementById('background-video-4');
  
  
      backgroundVideo2.style.display = 'none';
      backgroundVideo3.style.display = 'none';
      backgroundVideo4.style.display = 'none';
  
      buttonStart.addEventListener("click", function () {
          if (music.paused) {
              music.play();
              playButton.innerHTML = "";
              kissMyAss.style.opacity = '0';
              setTimeout(() => {
                  kissMyAss.style.display = 'none';
              }, 1000);
              backgroundVideo1.play();
          } else {
              music.pause();
              playButton.innerHTML = "Play Music";
          }
      });
  
  
      backgroundVideo1.addEventListener("ended", function () {
  
          backgroundVideo1.style.display = 'none';
          backgroundVideo2.style.display = 'block';
  
  
          backgroundVideo2.play();
      });
  
  
  backgroundVideo2.addEventListener("ended", function () {
  
      backgroundVideo2.style.display = 'none';
      backgroundVideo3.style.display = 'block';
  
      backgroundVideo3.play();
  });
  
  
  
      backgroundVideo3.addEventListener("ended", function () {
  
          backgroundVideo3.style.display = 'none';
          backgroundVideo4.style.display = 'block';
  
  
          backgroundVideo4.play();
      });
  
  
      backgroundVideo4.addEventListener("ended", function () {
  
          backgroundVideo1.style.display = 'block';
          backgroundVideo2.style.display = 'none';
          backgroundVideo3.style.display = 'none';
          backgroundVideo4.style.display = 'none';
  
          backgroundVideo1.play();
      });
  });