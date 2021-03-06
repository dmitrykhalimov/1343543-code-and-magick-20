'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 22;

var BAR_WIDTH = 40;
var CHART_GAP = 50;
var PADDING_BOTTOM = 30;
var MAX_HEIGHT = 150;

var NAME_GAP = 10;
var STATS_GAP = 15;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var makeGraph = function (ctx, coefficient, heightGraph, color) {
  ctx.fillStyle = color;
  ctx.fillRect(CLOUD_X + CHART_GAP + (CHART_GAP + BAR_WIDTH) * coefficient, CLOUD_Y + (CLOUD_HEIGHT - PADDING_BOTTOM - heightGraph), BAR_WIDTH, heightGraph);
};

var makeText = function (ctx, coefficient, heightGraph, playerName, playerTime) {
  ctx.fillStyle = 'black';

  ctx.fillText(playerName, CLOUD_X + CHART_GAP + (CHART_GAP + BAR_WIDTH) * coefficient, CLOUD_Y + (CLOUD_HEIGHT - PADDING_BOTTOM + NAME_GAP));
  ctx.fillText(Math.floor(playerTime), CLOUD_X + CHART_GAP + (CHART_GAP + BAR_WIDTH) * coefficient, CLOUD_Y + (CLOUD_HEIGHT - PADDING_BOTTOM - heightGraph - STATS_GAP));
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = 'black';
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP * 2);

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var currentHeight = (MAX_HEIGHT * times[i]) / maxTime;
    var randomSaturation = Math.floor(100 * Math.random()) + '%';
    var colorGraph = 'hsl(240, ' + randomSaturation + ', 50%)';

    if (players[i] === 'Вы') {
      colorGraph = 'rgba(255, 0, 0, 1)';
    }

    makeGraph(ctx, i, currentHeight, colorGraph);
    makeText(ctx, i, currentHeight, players[i], times[i]);
  }
};
