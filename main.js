for (let i = 0; i < 200; i++) {
  const body = document.querySelector('body');
  const y = Math.random() * window.innerHeight;
  const x = Math.random() * window.innerWidth;
  const colors = '#' + Math.floor(Math.random() * 16777215).toString(16);
  const speed = Math.floor(Math.random() * 6 + 8) + 's';
  const balloon_el = document.createElement('div'); 
  balloon_el.classList.add('balloon');
  const triangle_el = document.createElement('div');
  triangle_el.classList.add('triangle');
  balloon_el.appendChild(triangle_el);
  const string_el = document.createElement('div');
  string_el.classList.add('string');
  balloon_el.appendChild(string_el);
  balloon_el.style.transform = 'translate3d(' + x + 'px, ' + y + 'px, 0)'; 
  balloon_el.style.animationDuration = speed;
  balloon_el.style.background = randomColor();
  triangle_el.style.borderBottom = balloon_el.style.background + '7px solid';
  body.appendChild(balloon_el);

    function purpleHurp() {
    balloon_el.style.background = randomColor({ hue: 'purple' });
    triangle_el.style.borderBottom = balloon_el.style.background + '7px solid'; 
    body.style.backgroundColor = 'ghostwhite';
  }

  function orangeSpor() {
    balloon_el.style.background = randomColor({ hue: 'orange' });
    triangle_el.style.borderBottom = balloon_el.style.background + '7px solid';
    body.style.backgroundColor = 'ghostwhite';
  }

  function blueFlu() {
    balloon_el.style.background = randomColor({ hue: 'blue' });
    triangle_el.style.borderBottom = balloon_el.style.background + '7px solid';
    body.style.backgroundColor = 'ghostwhite';
  }

  function greenMean() {
    balloon_el.style.background = randomColor({ hue: 'green' });
    triangle_el.style.borderBottom = balloon_el.style.background + '7px solid';
    body.style.backgroundColor = 'ghostwhite';
  } 

  function yellowFellow() {
    balloon_el.style.background = randomColor({ hue: 'yellow' });
    triangle_el.style.borderBottom = balloon_el.style.background + '7px solid';
    body.style.backgroundColor = 'ghostwhite';
  }

  function redFred() {
    balloon_el.style.background = randomColor({ hue: 'red' });
    triangle_el.style.borderBottom = balloon_el.style.background + '7px solid';
    body.style.backgroundColor = 'ghostwhite';
  }

  function randomFandom() {
    balloon_el.style.background = randomColor({ luminosity: 'light' });
    triangle_el.style.borderBottom = balloon_el.style.background + '7px solid';
    body.style.backgroundColor = 'ghostwhite';
  }

  function cyanBuyin() {
    balloon_el.style.background = randomColor({ hue: '#00FFFF' });
    triangle_el.style.borderBottom = balloon_el.style.background + '7px solid';
    body.style.backgroundColor = 'ghostwhite';
  }

  function pinky() {
    balloon_el.style.background = randomColor({ hue: 'pink' });
    triangle_el.style.borderBottom = balloon_el.style.background + '7px solid';
    body.style.backgroundColor = 'ghostwhite';
  }

  function dark() {
    balloon_el.style.background = randomColor({ hue: 'monochrome' });
    body.style.backgroundColor = 'rgba(0, 0, 0, 0.616)';
    triangle_el.style.borderBottom = balloon_el.style.background + '7px solid';
  }

  const dark_btn = document.getElementById('dark');
  dark_btn.addEventListener('click', dark);
  dark_btn.addEventListener('touchstart', dark)
  
  const pink = document.getElementById('pink');
  pink.addEventListener('click', pinky);
  pink.addEventListener('touchstart', pinky)
  
  const cyan = document.getElementById('cyan');
  cyan.addEventListener('click', cyanBuyin);
  cyan.addEventListener('touchstart', cyanBuyin)

  const random = document.getElementById('random');
  random.addEventListener('click', randomFandom);
  random.addEventListener('touchstart', randomFandom)

  const red = document.getElementById('red');
  red.addEventListener('click', redFred);
  red.addEventListener('touchstart', redFred)

  const yellow = document.getElementById('yellow');
  yellow.addEventListener('click', yellowFellow);
  yellow.addEventListener('touchstart', yellowFellow)

  const green = document.getElementById('green');
  green.addEventListener('click', greenMean);
  green.addEventListener('touchstart', greenMean)

  const blue = document.getElementById('blue');
  blue.addEventListener('click', blueFlu);
  blue.addEventListener('touchstart', blueFlu)

  const orange = document.getElementById('orange');
  orange.addEventListener('click', orangeSpor);
  orange.addEventListener('touchstart', orangeSpor)

  const purple = document.getElementById('purple');
  purple.addEventListener('click', purpleHurp);
  purple.addEventListener('touchstart', purpleHurp)
}
