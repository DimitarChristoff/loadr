import Loadr from '../src/loadr';

// basics
{
  const i = new Loadr(document.querySelector('section.one'));
  i.start();
}

// manual speed control
{
  const i = new Loadr(document.querySelector('section.two div.loader-text'), {
    delay: 1400
  });
  i.start();
}

// manually doing stuff, just getting new messages
{
  const i = new Loadr();

  let i3s = document.querySelectorAll('section.three div.loader-text > div'),
    last = 0,
    spinner = document.querySelector('section.three .sk-spinner-pulse'),
    getNewMessages = function(){
      i3s[last].innerHTML = i.get();
      i3s[last].classList.remove('hide');
      last = last == 0 ? 1 : 0;
      i3s[last].classList.add('hide');
    };

  spinner.addEventListener('animationiteration', getNewMessages, false);
  spinner.addEventListener('animationstart', getNewMessages, false);

  Array.prototype.forEach.call(i3s, function(el){
    el.innerHTML = i.get();
  });
}

// mad colour stuff
{
  const randomColor = (() =>{
    const randomInt = (min, max) =>{
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    return () =>{
      var h = randomInt(0, 360);
      var s = randomInt(42, 98);
      var l = randomInt(40, 90);
      return `hsl(${h},${s}%,${l}%)`;
    };
  })();

  let i = new Loadr(document.querySelector('section.four')),
    max = document.body.offsetWidth - 200,
    divs = [];

  setInterval(() =>{
    let div = document.createElement('div');

    divs.push(div);

    div.className = 'loadr-slug fade-out';
    div.innerHTML = i.get();

    let x = ~~(Math.random() * max),
      y = ~~(Math.random() * 255);

    // div.style.transform = `translate3d(${x}px, ${y}px, 0);`;
    div.style.left = x + 'px';
    div.style.top = y + 'px';
    div.style.color = randomColor();
    i.element.appendChild(div);

    window.requestAnimationFrame(() =>{
      div.classList.remove('fade-out');
    });

    if (divs.length > 7){
      divs[0].addEventListener('transitionend', function(){
        this.parentNode.removeChild(this);
      });

      divs[0].classList.add('fade-out');
      divs.shift();

    }
  }, 1000);
}
