// make lines shorter
var d = document;
d.gId = d.getElementById;
d.aEL = d.addEventListener;

var b = undefined;
var colorset = undefined;

// document ready
d.aEL('DOMContentLoaded', function() {
  console.log('hello home page');

  // fetch state
  colorset = localStorage.getItem('home/colorset');
  if (!colorset) colorset = 'colorset0';

  // bind elements
  b = d.gId('body');

  // setup state
  b.classList.value = colorset;

  // change color on numkey press
  d.aEL('keypress', function(event) {
    if ('1234567890'.includes(event.key)) {
      b.classList.value = ''
      switch (event.key) {
        case '1':
          b.classList.add('colorset1'); break;
        case '2':
          b.classList.add('colorset2'); break;
        case '3':
          b.classList.add('colorset3'); break;
        case '4':
          b.classList.add('colorset4'); break;
        case '5':
          b.classList.add('colorset5'); break;
        case '6':
          b.classList.add('colorset6'); break;
        case '7':
          b.classList.add('colorset7'); break;
        case '8':
          b.classList.add('colorset8'); break;
        case '9':
          b.classList.add('colorset9'); break;
        case '0':
          b.classList.add('colorset0'); break;
      }
      var set = b.classList.value;
      localStorage.setItem('home/colorset', set);
    }
  });
});
