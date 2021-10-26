window.addEventListener('load', () => {
  const sounds = document.querySelectorAll('.sound');
  const pads = document.querySelectorAll('.pads div');
  const visual = document.querySelector('.visual');
  const colors = [
    '#f8faff',
    '#d5def5',
    '#8594e4',
    '#6643b5',
    '#430f58',
    '#280436'
  ];

  //adding the sounds
  pads.forEach((pad, index) => {
    pad.addEventListener('click', function() {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBalls(index);
    });
  });

  //making the balls
  const createBalls = (index) => {
    const ball = document.createElement('div');
    visual.appendChild(ball);
    ball.style.backgroundColor = colors[index];
    ball.style.animation = 'jump 1s ease';
    ball.addEventListener('animationend', function() {
      visual.removeChild(this);
    });
  }
});
