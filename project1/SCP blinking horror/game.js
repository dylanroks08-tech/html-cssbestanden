
window.addEventListener('load', function () { // wacht tot de pagina volledig is geladen voordat de code wordt uitgevoerd

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
    function willekeurigeTijd(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Onderstaande array constante definieert de stappen met daarin de tijdsduur voordat de actie wordt uitgevoerd en daarna de acties zelf
  const steps = [
    { delay: 36000, action: function () { hide('change'); hide('achter'); } },
    { delay: 15000, action: function () { hide('scp173'); hide('scp-text'); } },
    { delay: 60000, action: function () { hide('door'); } },
    { delay: willekeurigeTijd(1000, 24000), action: function () { show('peanut'); } },
    { delay: willekeurigeTijd(1000, 24000), action: function () { hide('peanut'); show('peanut2'); } },
    { delay: willekeurigeTijd(1000, 24000), action: function () { hide('peanut2'); show('peanut3'); } },
    { delay: willekeurigeTijd(1000, 24000), action: function () { hide('peanut3'); show('peanut4'); } },
    { delay: willekeurigeTijd(1000, 24000), action: function () { hide('peanut4'); show('peanut5'); } },
    { delay: 60000, action: function () {
        hide('opendoor');
        hide('peanut5');
        show('peanut6');
        show('sound4');
        show('nav');
      }
    }
  ];

  // Doorloop  de stappen een voor een
  let elapsed = 0;
  steps.forEach(function(step) {
    elapsed += step.delay;
    setTimeout(step.action, elapsed);
  });
}); // einde van de load event listener





