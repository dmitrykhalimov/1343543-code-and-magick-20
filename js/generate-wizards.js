'use strict';

(function () {

  var PLAYERS_QUANTITY = 4;
  var PLAYERS_TEMPLATE = {
    name: '',
    coatColor: '',
    eyesColor: ''
  };
  var PLAYERS_NAMES = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];
  var PLAYERS_SURNAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];

  var players = new Array(PLAYERS_QUANTITY).fill().map(function () {
    return Object.assign({}, PLAYERS_TEMPLATE);
  });

  var mixedNames = window.utils.mixArray(PLAYERS_NAMES);
  var mixedSurnames = window.utils.mixArray(PLAYERS_SURNAMES);
  for (var i = 0; i < players.length; i++) {
    players[i].name = mixedNames[i] + ' ' + mixedSurnames[i];
    players[i].coatColor = window.colorize.generateColor('coats');
    players[i].eyesColor = window.colorize.generateColor('eyes');
  }


  window.generateWizards = {
    players: players
  };
})();
