'use strict';

(function () {
  var PLAYERS_QUANTITY = 4;

  var setupClass = document.querySelector('.setup');
  var fragment = document.createDocumentFragment();
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var similarListElement = setupClass.querySelector('.setup-similar-list');

  var renderWizard = function (player) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = player.name;
    wizardElement.querySelector('.wizard-coat').style.fill = player.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = player.colorEyes;

    return wizardElement;
  };

  var onLoad = function (receivedData) {
    console.log(receivedData);
    var randomSimilarPlayers = window.utils.mixArray(receivedData);

    for (var i = 0; i < PLAYERS_QUANTITY; i++) {
      fragment.appendChild(renderWizard(randomSimilarPlayers[i]));
    }

    similarListElement.appendChild(fragment);
  };

  window.backend.serverQuery('https://javascript.pages.academy/code-and-magick/data', 'GET', onLoad, window.backend.drawError);

  setupClass.querySelector('.setup-similar').classList.remove('hidden');
})();
