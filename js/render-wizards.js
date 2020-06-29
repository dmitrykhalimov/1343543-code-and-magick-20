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
    console.log(window.customize.currentColors);

    var sameCoatAndEyesWizards = wizards.filter(function (it) {
      return it.colorCoat === window.customize.currentColors.colorCoat && it.colorEyes === window.customize.currentColors.colorEyes;
    });

    var sameCoatWizards = wizards.filter(function (it) {
      return it.colorCoat === window.customize.currentColors.colorCoat;
    });

    var sameEyesWizards = wizards.filter(function (it) {
      return it.colorEyes === window.customize.currentColors.colorEyes;
    });

    var filteredWizards = sameCoatAndEyesWizards;
    filteredWizards = filteredWizards.concat(sameCoatWizards);
    filteredWizards = filteredWizards.concat(sameEyesWizards);
    filteredWizards = filteredWizards.concat(wizards);

    var uniqueWizards = filteredWizards.filter(function (it, i) {
      return filteredWizards.indexOf(it) === i;
    });

    for (var i = 0; i < PLAYERS_QUANTITY; i++) {
      fragment.appendChild(renderWizard(uniqueWizards[i]));
    }
    similarListElement.innerHTML = '';
    similarListElement.appendChild(fragment);
 /*   console.log('Получен цвет' + color);
    console.log('Получен предмет одежды' + colorType);
    console.log(wizards);
    var wizards2 = wizards.filter(function (wizard) {
      return wizard[colorType] === color;
    });
    console.log(wizards2);*/
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
