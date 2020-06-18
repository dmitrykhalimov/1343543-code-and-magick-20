'use strict';

(function () {
  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');

  var customize = function (element, colorType, inputClass) {
    element.addEventListener('click', function () {
      var color = window.colorize.generateColor(colorType);
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
      document.querySelector(inputClass).value = color;
    });
  };

  customize(wizardCoat, 'coats', 'input[name="coat-color"]');
  customize(wizardEyes, 'eyes', 'input[name="coat-color"]');
  customize(fireball, 'fireball', 'input[name="fireball-color"]');
})();
