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

names.forEach(function(name) {
  var delay = Math.random() * 10000
  setTimeout(function() {
    var audio = new Audio('sounds/' + name + '.mp3');
    audio.play()
  }, delay);
})
