'use strict';

(function () {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var setupClass = document.querySelector('.setup');

  var renderWizard = function (player) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = player.name;
    wizardElement.querySelector('.wizard-coat').style.fill = player.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = player.eyesColor;

    return wizardElement;
  };

  var fragment = document.createDocumentFragment();

  for (var i = 0; i < window.generateWizards.players.length; i++) {
    fragment.appendChild(renderWizard(window.generateWizards.players[i]));
  }

  var similarListElement = setupClass.querySelector('.setup-similar-list');
  similarListElement.appendChild(fragment);

  setupClass.querySelector('.setup-similar').classList.remove('hidden');
})();
