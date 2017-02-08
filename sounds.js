var names = [
'Alex',
'Alice',
'Alva',
'Amelie',
'Anna',
'Carmit',
'Damayanti',
'Daniel',
'Diego',
'Ellen',
'Fiona',
'Fred',
'Ioana',
'Joana',
'Jorge',
'Juan',
'Kanya',
'Karen',
'Kyoko',
'Laura',
'Lekha',
'Luca',
'Luciana',
'Maged',
'Mariska',
'Mei-Jia',
'Melina',
'Milena',
'Moira',
'Monica',
'Nora',
'Paulina',
'Samantha',
'Sara',
'Satu',
'Sin-ji',
'Tessa',
'Thomas',
'Ting-Ting',
'Veena',
'Victoria',
'Xander',
'Yelda',
'Yuna',
'Yuri',
'Zosia',
'Zuzana'
];

function printText() {
  var sp = document.createElement('span');
  sp.textContent = 'hello its me'
  sp.className = 'text';
  sp.style['right'] = Math.floor(Math.random() * window.innerWidth) + 'px'
  sp.style['top'] = Math.floor(Math.random() * window.innerHeight) + 'px'
  sp.style['transform'] = 'rotate(' + Math.floor(Math.random() * 360) + 'deg)'
  sp.style['font-size'] = Math.floor(Math.random() * 100) + 'px'
  document.body.appendChild(sp);
}

names.forEach(function(name) {
  var delay = Math.random() * 10000
  setTimeout(function() {
    var audio = new Audio('sounds/' + name + '.mp3');
    audio.play()
    printText();
  }, delay);
})
