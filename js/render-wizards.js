'use strict';

(function () {
  var PLAYERS_QUANTITY = 4;

  var setupClass = document.querySelector('.setup');
  var fragment = document.createDocumentFragment();
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var similarListElement = setupClass.querySelector('.setup-similar-list');

  var renderWizard = function (player) {
    console.log(player);
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = player.name;
    wizardElement.querySelector('.wizard-coat').style.fill = player.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = player.eyesColor;

    console.log(wizardElement);
    return wizardElement;
  };

  var onLoad = function (receivedData) {
    var randomSimilarPlayers = window.utils.mixArray(receivedData);
    console.log(randomSimilarPlayers);
    for (var i = 0; i < PLAYERS_QUANTITY; i++) {
      fragment.appendChild(renderWizard(randomSimilarPlayers[i]));
    }
  };

  window.backend.load(onLoad);

  similarListElement.appendChild(fragment);

  setupClass.querySelector('.setup-similar').classList.remove('hidden');
})();
