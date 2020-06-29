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

  var updateWizards = function () {
    var getRank = function (wizard) {
      var rank = 0;

      if (wizard.colorCoat === window.customize.currentColors.colorCoat) {
        rank += 2;
      }
      if (wizard.colorEyes === window.customize.currentColors.colorEyes) {
        rank += 1;
      }

      return rank;
    };

    var namesComparator = function (left, right) {
      if (left > right) {
        return 1;
      } else if (left < right) {
        return -1;
      } else {
        return 0;
      }
    };

    var uniqueWizards = wizards.slice().sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    });

    for (var i = 0; i < PLAYERS_QUANTITY; i++) {
      fragment.appendChild(renderWizard(uniqueWizards[i]));
    }
    similarListElement.innerHTML = '';
    similarListElement.appendChild(fragment);
  };

  var wizards = [];
  var onLoad = function (receivedData) {
    wizards = receivedData;
    updateWizards();
  };

  window.backend.serverQuery('https://javascript.pages.academy/code-and-magick/data', 'GET', onLoad, window.backend.drawError);
  setupClass.querySelector('.setup-similar').classList.remove('hidden');

  window.renderWizards = {
    updateWizards: updateWizards
  };
})();
