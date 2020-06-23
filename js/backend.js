'use strict';

(function () {
  var StatusCode = {
    OK: 200
  };

  var URLS = {
    load: 'https://javascript.pages.academy/code1-and-magick/data',
    save: 'https://javascript.pages.academy/co2de-and-magick'
  };

  var drawError = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red; width: 500px; top: 250px;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  var serverQuery = function (link, method, onLoad, onError, data) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    console.log(link);
    console.log(method);
    console.log(onLoad);
    console.log(onError);
    console.log(data);

    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError('Ошибка отправки данных на сервер. Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.open(method, link);
    xhr.send(data);
  };

  window.backend = {
    serverQuery: serverQuery,
    drawError: drawError
  };
})();
