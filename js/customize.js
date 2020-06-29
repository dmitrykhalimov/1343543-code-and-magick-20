'use strict';

(function () {
  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');

  var currentColors = {
    colorCoat: 'rgb(101, 137, 164)',
    colorEyes: 'black'
  };

  var customize = function (element, colorType, inputClass) {
    element.addEventListener('click', function () {
      var color = window.colorize.generateColor(colorType);
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
      document.querySelector(inputClass).value = color;
      currentColors[colorType] = color;

      window.debounce(function () {
        window.renderWizards.updateWizards();
      });
    });
  };

  window.customize = {
    currentColors: currentColors
  };
  customize(wizardCoat, 'colorCoat', 'input[name="coat-color"]');
  customize(wizardEyes, 'colorEyes', 'input[name="coat-color"]');
  customize(fireball, 'colorFireball', 'input[name="fireball-color"]');
})();
