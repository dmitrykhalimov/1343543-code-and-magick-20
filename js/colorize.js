'use strict';

(function () {

  var COLORS = {
    coats: [
      'rgb(101, 137, 164)',
      'rgb(241, 43, 107)',
      'rgb(146, 100, 161)',
      'rgb(56, 159, 117)',
      'rgb(215, 210, 55)',
      'rgb(0, 0, 0)',
    ],
    eyes: [
      'black',
      'red',
      'blue',
      'yellow',
      'green',
    ],
    fireball: [
      '#ee4830',
      '#30a8ee',
      '#5ce6c0',
      '#e848d5',
      '#e6e848'
    ]
  };

  window.colorize = {
    generateColor: function (typeElement) {
      var colors = COLORS[typeElement];
      var color = colors[window.utils.generateRandomNumber(0, colors.length - 1)];
      return color;
    },
  };
})();
