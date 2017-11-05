exports.id = 0;
exports.modules = {

/***/ "./src/backend/io.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });var _socket = __webpack_require__(\"socket.io\");var _socket2 = _interopRequireDefault(_socket);\nvar _models = __webpack_require__(\"./src/backend/models/index.js\");\nvar _randomstring = __webpack_require__(\"randomstring\");var _randomstring2 = _interopRequireDefault(_randomstring);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\nvar io = (0, _socket2.default)();\nvar games = [];\nio.on('connection', function (socket) {\n  socket.on('AUTH', function (data) {var\n    token = data.token;\n    _models.Auth.verify(token).\n    then(function (auth) {return _models.Auth.populate(auth, 'user');}).\n    then(function (auth) {return auth.refresh();}).\n    then(function (auth) {var _auth$user =\n      auth.user,fb_user_id = _auth$user.fb_user_id,name = _auth$user.name;\n      assignPlayer({ fb_user_id: fb_user_id, name: name });\n    }).\n    catch(function (err) {\n      console.error(err);\n      socket.disconnect();\n    });\n  });\n\n  var assignPlayer = function assignPlayer(user) {\n    var game = games.find(function (game) {return game.players.some(function (player) {return user.fb_user_id === player.user.fb_user_id;});});\n    if (!game) {\n      game = games.find(function (game) {return !game.started_at;});\n    }\n    if (!game) {\n      game = {\n        room: _randomstring2.default.generate(),\n        started_at: null,\n        players: [],\n        topic_idx: null };\n\n      games.push(game);\n    }\n    socket.join(game.room);\n\n    var player = game.players.find(function (player) {return user.fb_user_id === player.user.fb_user_id;});\n    if (!player) {\n      player = {\n        user: user,\n        time: null,\n        code: null,\n        typing: false };\n\n      game.players.push(player);\n    }\n\n    if (game.started_at || game.players.length < 2) {\n      updateGame(game);\n    } else {\n      game.started_at = new Date();\n      _models.Topic.count().\n      then(function (count) {\n        var random = Math.random() * count | 0;\n        return _models.Topic.findOne().skip(random);\n      }).\n      then(function (topic) {\n        game.topic_idx = topic._id;\n        updateGame(game);\n      }).\n      catch(console.error);\n    }\n\n    socket.on('START_TYPING');\n  };\n\n  var updateGame = function updateGame(game) {\n    game.updated_at = new Date();\n    console.log(game);\n    io.to(game.room).emit('GAME_UPDATED', game);\n  };\n});exports.default =\n\nio;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmFja2VuZC9pby5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9iYWNrZW5kL2lvLmpzPzRjMjciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTt2YXIgX3NvY2tldCA9IHJlcXVpcmUoJ3NvY2tldC5pbycpO3ZhciBfc29ja2V0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NvY2tldCk7XG52YXIgX21vZGVscyA9IHJlcXVpcmUoJy9tb2RlbHMnKTtcbnZhciBfcmFuZG9tc3RyaW5nID0gcmVxdWlyZSgncmFuZG9tc3RyaW5nJyk7dmFyIF9yYW5kb21zdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFuZG9tc3RyaW5nKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge3JldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9O31cblxudmFyIGlvID0gKDAsIF9zb2NrZXQyLmRlZmF1bHQpKCk7XG52YXIgZ2FtZXMgPSBbXTtcbmlvLm9uKCdjb25uZWN0aW9uJywgZnVuY3Rpb24gKHNvY2tldCkge1xuICBzb2NrZXQub24oJ0FVVEgnLCBmdW5jdGlvbiAoZGF0YSkge3ZhclxuICAgIHRva2VuID0gZGF0YS50b2tlbjtcbiAgICBfbW9kZWxzLkF1dGgudmVyaWZ5KHRva2VuKS5cbiAgICB0aGVuKGZ1bmN0aW9uIChhdXRoKSB7cmV0dXJuIF9tb2RlbHMuQXV0aC5wb3B1bGF0ZShhdXRoLCAndXNlcicpO30pLlxuICAgIHRoZW4oZnVuY3Rpb24gKGF1dGgpIHtyZXR1cm4gYXV0aC5yZWZyZXNoKCk7fSkuXG4gICAgdGhlbihmdW5jdGlvbiAoYXV0aCkge3ZhciBfYXV0aCR1c2VyID1cbiAgICAgIGF1dGgudXNlcixmYl91c2VyX2lkID0gX2F1dGgkdXNlci5mYl91c2VyX2lkLG5hbWUgPSBfYXV0aCR1c2VyLm5hbWU7XG4gICAgICBhc3NpZ25QbGF5ZXIoeyBmYl91c2VyX2lkOiBmYl91c2VyX2lkLCBuYW1lOiBuYW1lIH0pO1xuICAgIH0pLlxuICAgIGNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIHNvY2tldC5kaXNjb25uZWN0KCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHZhciBhc3NpZ25QbGF5ZXIgPSBmdW5jdGlvbiBhc3NpZ25QbGF5ZXIodXNlcikge1xuICAgIHZhciBnYW1lID0gZ2FtZXMuZmluZChmdW5jdGlvbiAoZ2FtZSkge3JldHVybiBnYW1lLnBsYXllcnMuc29tZShmdW5jdGlvbiAocGxheWVyKSB7cmV0dXJuIHVzZXIuZmJfdXNlcl9pZCA9PT0gcGxheWVyLnVzZXIuZmJfdXNlcl9pZDt9KTt9KTtcbiAgICBpZiAoIWdhbWUpIHtcbiAgICAgIGdhbWUgPSBnYW1lcy5maW5kKGZ1bmN0aW9uIChnYW1lKSB7cmV0dXJuICFnYW1lLnN0YXJ0ZWRfYXQ7fSk7XG4gICAgfVxuICAgIGlmICghZ2FtZSkge1xuICAgICAgZ2FtZSA9IHtcbiAgICAgICAgcm9vbTogX3JhbmRvbXN0cmluZzIuZGVmYXVsdC5nZW5lcmF0ZSgpLFxuICAgICAgICBzdGFydGVkX2F0OiBudWxsLFxuICAgICAgICBwbGF5ZXJzOiBbXSxcbiAgICAgICAgdG9waWNfaWR4OiBudWxsIH07XG5cbiAgICAgIGdhbWVzLnB1c2goZ2FtZSk7XG4gICAgfVxuICAgIHNvY2tldC5qb2luKGdhbWUucm9vbSk7XG5cbiAgICB2YXIgcGxheWVyID0gZ2FtZS5wbGF5ZXJzLmZpbmQoZnVuY3Rpb24gKHBsYXllcikge3JldHVybiB1c2VyLmZiX3VzZXJfaWQgPT09IHBsYXllci51c2VyLmZiX3VzZXJfaWQ7fSk7XG4gICAgaWYgKCFwbGF5ZXIpIHtcbiAgICAgIHBsYXllciA9IHtcbiAgICAgICAgdXNlcjogdXNlcixcbiAgICAgICAgdGltZTogbnVsbCxcbiAgICAgICAgY29kZTogbnVsbCxcbiAgICAgICAgdHlwaW5nOiBmYWxzZSB9O1xuXG4gICAgICBnYW1lLnBsYXllcnMucHVzaChwbGF5ZXIpO1xuICAgIH1cblxuICAgIGlmIChnYW1lLnN0YXJ0ZWRfYXQgfHwgZ2FtZS5wbGF5ZXJzLmxlbmd0aCA8IDIpIHtcbiAgICAgIHVwZGF0ZUdhbWUoZ2FtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdhbWUuc3RhcnRlZF9hdCA9IG5ldyBEYXRlKCk7XG4gICAgICBfbW9kZWxzLlRvcGljLmNvdW50KCkuXG4gICAgICB0aGVuKGZ1bmN0aW9uIChjb3VudCkge1xuICAgICAgICB2YXIgcmFuZG9tID0gTWF0aC5yYW5kb20oKSAqIGNvdW50IHwgMDtcbiAgICAgICAgcmV0dXJuIF9tb2RlbHMuVG9waWMuZmluZE9uZSgpLnNraXAocmFuZG9tKTtcbiAgICAgIH0pLlxuICAgICAgdGhlbihmdW5jdGlvbiAodG9waWMpIHtcbiAgICAgICAgZ2FtZS50b3BpY19pZHggPSB0b3BpYy5faWQ7XG4gICAgICAgIHVwZGF0ZUdhbWUoZ2FtZSk7XG4gICAgICB9KS5cbiAgICAgIGNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuICAgIH1cblxuICAgIHNvY2tldC5vbignU1RBUlRfVFlQSU5HJyk7XG4gIH07XG5cbiAgdmFyIHVwZGF0ZUdhbWUgPSBmdW5jdGlvbiB1cGRhdGVHYW1lKGdhbWUpIHtcbiAgICBnYW1lLnVwZGF0ZWRfYXQgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnNvbGUubG9nKGdhbWUpO1xuICAgIGlvLnRvKGdhbWUucm9vbSkuZW1pdCgnR0FNRV9VUERBVEVEJywgZ2FtZSk7XG4gIH07XG59KTtleHBvcnRzLmRlZmF1bHQgPVxuXG5pbztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9iYWNrZW5kL2lvLmpzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9iYWNrZW5kL2lvLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/backend/io.js\n");

/***/ })

};