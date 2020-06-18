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


// console.log(window.utils.window.utils.mixArray(FIREBALL_COLORS));

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setupClass = document.querySelector('.setup');

var players = [];

var generateWizards = function () {
  var mixedNames = window.utils.mixArray(PLAYERS_NAMES);
  var mixedSurnames = window.utils.mixArray(PLAYERS_SURNAMES);
  for (var i = 0; i < players.length; i++) {
    players[i].name = mixedNames[i] + ' ' + mixedSurnames[i];
    players[i].coatColor = window.colorize.generateColor('coats');
    players[i].eyesColor = window.colorize.generateColor('eyes');
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

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');

var setupUsername = document.querySelector('.setup-user-name');

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape' && document.activeElement !== setupUsername) {
    evt.preventDefault();
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function (evt) {
  evt.preventDefault();
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  closePopup();
});

var wizardCoat = document.querySelector('.wizard-coat');
var wizardEyes = document.querySelector('.wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');

wizardCoat.addEventListener('click', function () {
  var coatColor = window.colorize.generateColor('coats');
  wizardCoat.style.fill = coatColor;
  document.querySelector('input[name="coat-color"]').value = coatColor;
});

wizardEyes.addEventListener('click', function () {
  var eyesColor = window.colorize.generateColor('eyes');
  wizardEyes.style.fill = eyesColor;
  document.querySelector('input[name="eyes-color"]').value = eyesColor;
});

fireball.addEventListener('click', function () {
  var fireballColor = window.colorize.generateColor('fireball');
  fireball.style.backgroundColor = fireballColor;
  document.querySelector('input[name="fireball-color"]').value = fireballColor;
});

