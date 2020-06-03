'use strict';

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
var PLAYER_COATS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)',
];
var PLAYER_EYES = [
  'black',
  'red',
  'blue',
  'yellow',
  'green',
];

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setupClass = document.querySelector('.setup');
setupClass.classList.remove('hidden');

var players = [];

var mixArray = function (arr) {
  var j;
  var temp;
  var mixedArray = arr.slice();

  for (var i = mixedArray.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = mixedArray[j];
    mixedArray[j] = mixedArray[i];
    mixedArray[i] = temp;
  }
  return mixedArray;
};

var generateRandomNumber = function (min, max) {
  var randomNumber = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNumber);
};

var generateWizards = function () {
  var mixedNames = mixArray(PLAYERS_NAMES);
  var mixedSurnames = mixArray(PLAYERS_SURNAMES);
  for (var i = 0; i < players.length; i++) {
    players[i].name = mixedNames[i] + ' ' + mixedSurnames[i];
    players[i].coatColor = PLAYER_COATS[generateRandomNumber(0, PLAYER_COATS.length - 1)];
    players[i].eyesColor = PLAYER_EYES[generateRandomNumber(0, PLAYER_EYES.length - 1)];
  }
};

players = new Array(PLAYERS_QUANTITY).fill().map(function () {
  return Object.assign({}, PLAYERS_TEMPLATE);
});

generateWizards();

var renderWizard = function (player) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = player.name;
  wizardElement.querySelector('.wizard-coat').style.fill = player.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = player.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < players.length; i++) {
  fragment.appendChild(renderWizard(players[i]));
}

var similarListElement = setupClass.querySelector('.setup-similar-list');
similarListElement.appendChild(fragment);

setupClass.querySelector('.setup-similar').classList.remove('hidden');
