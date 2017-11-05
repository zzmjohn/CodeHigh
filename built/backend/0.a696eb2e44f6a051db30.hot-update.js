exports.id = 0;
exports.modules = {

/***/ "./src/backend/socket.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _socket = __webpack_require__(\"socket.io\");var _socket2 = _interopRequireDefault(_socket);\nvar _models = __webpack_require__(\"./src/backend/models/index.js\");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\nvar io = (0, _socket2.default)();\nvar games = [];\nio.on('connection', function (socket) {\n  socket.on('HANDSHAKE', function (data) {var\n    token = data.token;\n    _models.Auth.verify(token).\n    then(function (auth) {return _models.Auth.populate(auth, 'user');}).\n    then(function (auth) {return auth.refresh();}).\n    then(function (auth) {\n      var user_idx = auth.user.idx;\n      assignPlayer(user_idx);\n    }).\n    catch(function () {return socket.disconnect();});\n  });\n\n  var assignPlayer = function assignPlayer(user_idx) {\n    var game = games.find(function (game) {return game.started;});\n    if (!game) {\n      game = {\n        started_at: null,\n        players: [],\n        topic_idx: null };\n\n      games.push(game);\n    }\n    game.players.push({\n      user_idx: user_idx,\n      socket: socket,\n      time: null,\n      code: null });\n\n    if (game.players.length < 3) {\n      updateGame(game);\n    } else {\n      game.started_at = new Date();\n      _models.Topic.count().\n      then(function (count) {\n        var random = Math.random() * count | 0;\n        return _models.Topic.findOne().skip(random);\n      }).\n      then(function (topic) {\n        game.topic_idx = topic.idx;\n        updateGame(game);\n      });\n    }\n  };\n\n  var updateGame = function updateGame(game) {\n    var data = _extends({}, game);\n    data.players = data.players.map(function (_ref) {var user_idx = _ref.user_idx,time = _ref.time;return { user_idx: user_idx, time: time };});\n    socket.emit('GAME_UPDATED', game);\n  };\n});exports.default =\n\nio;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmFja2VuZC9zb2NrZXQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFja2VuZC9zb2NrZXQuanM/MDA5YyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO3ZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge2ZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7dmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHt0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO319fXJldHVybiB0YXJnZXQ7fTt2YXIgX3NvY2tldCA9IHJlcXVpcmUoJ3NvY2tldC5pbycpO3ZhciBfc29ja2V0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NvY2tldCk7XG52YXIgX21vZGVscyA9IHJlcXVpcmUoJy9tb2RlbHMnKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge3JldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9O31cblxudmFyIGlvID0gKDAsIF9zb2NrZXQyLmRlZmF1bHQpKCk7XG52YXIgZ2FtZXMgPSBbXTtcbmlvLm9uKCdjb25uZWN0aW9uJywgZnVuY3Rpb24gKHNvY2tldCkge1xuICBzb2NrZXQub24oJ0hBTkRTSEFLRScsIGZ1bmN0aW9uIChkYXRhKSB7dmFyXG4gICAgdG9rZW4gPSBkYXRhLnRva2VuO1xuICAgIF9tb2RlbHMuQXV0aC52ZXJpZnkodG9rZW4pLlxuICAgIHRoZW4oZnVuY3Rpb24gKGF1dGgpIHtyZXR1cm4gX21vZGVscy5BdXRoLnBvcHVsYXRlKGF1dGgsICd1c2VyJyk7fSkuXG4gICAgdGhlbihmdW5jdGlvbiAoYXV0aCkge3JldHVybiBhdXRoLnJlZnJlc2goKTt9KS5cbiAgICB0aGVuKGZ1bmN0aW9uIChhdXRoKSB7XG4gICAgICB2YXIgdXNlcl9pZHggPSBhdXRoLnVzZXIuaWR4O1xuICAgICAgYXNzaWduUGxheWVyKHVzZXJfaWR4KTtcbiAgICB9KS5cbiAgICBjYXRjaChmdW5jdGlvbiAoKSB7cmV0dXJuIHNvY2tldC5kaXNjb25uZWN0KCk7fSk7XG4gIH0pO1xuXG4gIHZhciBhc3NpZ25QbGF5ZXIgPSBmdW5jdGlvbiBhc3NpZ25QbGF5ZXIodXNlcl9pZHgpIHtcbiAgICB2YXIgZ2FtZSA9IGdhbWVzLmZpbmQoZnVuY3Rpb24gKGdhbWUpIHtyZXR1cm4gZ2FtZS5zdGFydGVkO30pO1xuICAgIGlmICghZ2FtZSkge1xuICAgICAgZ2FtZSA9IHtcbiAgICAgICAgc3RhcnRlZF9hdDogbnVsbCxcbiAgICAgICAgcGxheWVyczogW10sXG4gICAgICAgIHRvcGljX2lkeDogbnVsbCB9O1xuXG4gICAgICBnYW1lcy5wdXNoKGdhbWUpO1xuICAgIH1cbiAgICBnYW1lLnBsYXllcnMucHVzaCh7XG4gICAgICB1c2VyX2lkeDogdXNlcl9pZHgsXG4gICAgICBzb2NrZXQ6IHNvY2tldCxcbiAgICAgIHRpbWU6IG51bGwsXG4gICAgICBjb2RlOiBudWxsIH0pO1xuXG4gICAgaWYgKGdhbWUucGxheWVycy5sZW5ndGggPCAzKSB7XG4gICAgICB1cGRhdGVHYW1lKGdhbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnYW1lLnN0YXJ0ZWRfYXQgPSBuZXcgRGF0ZSgpO1xuICAgICAgX21vZGVscy5Ub3BpYy5jb3VudCgpLlxuICAgICAgdGhlbihmdW5jdGlvbiAoY291bnQpIHtcbiAgICAgICAgdmFyIHJhbmRvbSA9IE1hdGgucmFuZG9tKCkgKiBjb3VudCB8IDA7XG4gICAgICAgIHJldHVybiBfbW9kZWxzLlRvcGljLmZpbmRPbmUoKS5za2lwKHJhbmRvbSk7XG4gICAgICB9KS5cbiAgICAgIHRoZW4oZnVuY3Rpb24gKHRvcGljKSB7XG4gICAgICAgIGdhbWUudG9waWNfaWR4ID0gdG9waWMuaWR4O1xuICAgICAgICB1cGRhdGVHYW1lKGdhbWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciB1cGRhdGVHYW1lID0gZnVuY3Rpb24gdXBkYXRlR2FtZShnYW1lKSB7XG4gICAgdmFyIGRhdGEgPSBfZXh0ZW5kcyh7fSwgZ2FtZSk7XG4gICAgZGF0YS5wbGF5ZXJzID0gZGF0YS5wbGF5ZXJzLm1hcChmdW5jdGlvbiAoX3JlZikge3ZhciB1c2VyX2lkeCA9IF9yZWYudXNlcl9pZHgsdGltZSA9IF9yZWYudGltZTtyZXR1cm4geyB1c2VyX2lkeDogdXNlcl9pZHgsIHRpbWU6IHRpbWUgfTt9KTtcbiAgICBzb2NrZXQuZW1pdCgnR0FNRV9VUERBVEVEJywgZ2FtZSk7XG4gIH07XG59KTtleHBvcnRzLmRlZmF1bHQgPVxuXG5pbztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9iYWNrZW5kL3NvY2tldC5qc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvYmFja2VuZC9zb2NrZXQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/backend/socket.js\n");

/***/ })

};