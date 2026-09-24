
// Prevent drawing and selecting text on the page.
document.addEventListener('selectstart', (event) => {
  event.preventDefault();
});
document.addEventListener('dragstart', (event) => {
  event.preventDefault();
});
window.addEventListener('load', function () { // wacht tot de pagina volledig is geladen voordat de code wordt uitgevoerd
let gameStarted = false;
    // Functie om een element te tonen door gebruik zijn inline display op 'block' te zetten
    function show(id) {
    const el = document.getElementById(id);
    if (el) el.style.display = 'block';
  }

    // Functie om een element te verbergen door gebruik van de 'hidden' class
  function hide(id) {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  }

    // Onderstaande Helper functie genereert een willekeurige tijd tussen min en max milliseconden
    

    // Onderstaande array constante definieert de stappen met daarin de tijdsduur voordat de actie wordt uitgevoerd en daarna de acties zelf
  const steps = [
    { delay: 3600, action: function () { hide('change'); hide('peanut5'); hide('gamelogo4');hide('gamelogo4rare');hide('achter'); } },
    { delay: 1500, action: function () { hide('scp173'); hide('scp-text'); } },
    { delay: 6000, action: function () { hide('door'); show('time'); show('timebutton'); startGame(); } },
    { delay: 120000, action: function () {
        if (gameStarted) {
        hide('opendoor');
        hide('time'); 
        hide('timebutton');
        hide('peanut');
        show('peanut6');
        show('sound4');
        show('nav');
        gameStarted = false;
        }}
     }
  ];

  // Doorloop  de stappen een voor een
  let elapsed = 0;
  steps.forEach(function(step) {
    elapsed += step.delay;
    setTimeout(step.action, elapsed);
  });
 // einde van de load event listener



const timebutton = document.getElementById('timebutton');
const scp173=document.getElementById('peanut');
const randomdeath = Math.random() 
let scpwidth=8;
let scpheight=0;
let stage = 0;
function startGame() {
    if (gameStarted) return;

    gameStarted = true;
    lastTimingEvent = Date.now();
    }

scp173.style.width=`${scpwidth}vh`

scp173.style.marginTop=`${scpheight}vh`
function updateEnemyPosition() {
  scp173.style.width=`${scpwidth}vh`;
  scp173.style.marginTop=`${scpheight}vh`;
  if (stage >= 5) {
  if (randomdeath < 0.1) {
    hide('opendoor');
    hide('time'); 
    hide('timebutton');
    hide('peanut');
    show('peanut5');
    show('nav');
    show('gamelogo4rare');
    gameStarted = false;
  } else {
    hide('opendoor');
    hide('time'); 
    hide('timebutton');
    hide('peanut');
    show('peanut5');
    show('nav');
    show('gamelogo4');
    gameStarted = false;
  }
}}


  let lastTimingEvent = 0;

      lastTimingEvent = Date.now();

gameinterval = setInterval(() => {
      if (!gameStarted) return;
      const randomNumber = Math.random();
      const eventIsDue = Date.now() - lastTimingEvent >= 5000;

      if (randomNumber < 0.25 || eventIsDue) {
        lastTimingEvent = Date.now();
        timebutton?.classList.remove('red');
        timebutton?.classList.add('green');
        setTimeout(() => {
          if (timebutton?.classList.contains('green')) {
            timebutton?.classList.remove('green');
            timebutton?.classList.add('red');
            scpwidth+=20;
            scpheight+=7;
            stage+=1 ;
            updateEnemyPosition();
          }
        }, 700);
      }
    },1000);


});