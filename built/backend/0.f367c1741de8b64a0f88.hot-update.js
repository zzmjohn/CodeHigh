exports.id = 0;
exports.modules = {

/***/ "./src/backend/io.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _socket = __webpack_require__(\"socket.io\");var _socket2 = _interopRequireDefault(_socket);\nvar _models = __webpack_require__(\"./src/backend/models/index.js\");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\nvar io = (0, _socket2.default)();\nvar games = [];\nio.on('connection', function (socket) {\n  socket.on('AUTH', function (data) {var\n    token = data.token;\n    _models.Auth.verify(token).\n    then(function (auth) {return _models.Auth.populate(auth, 'user');}).\n    then(function (auth) {return auth.refresh();}).\n    then(function (auth) {\n      var user_id = auth.user._id;\n      assignPlayer(user_id);\n    }).\n    catch(function (err) {\n      console.error(err);\n      socket.disconnect();\n    });\n  });\n\n  var assignPlayer = function assignPlayer(user_id) {\n    var game = games.find(function (game) {return !game.started_at;});\n    if (!game) {\n      game = {\n        started_at: null,\n        players: [],\n        topic_idx: null };\n\n      games.push(game);\n    }\n    game.players.push({\n      user_id: user_id,\n      socket: socket,\n      time: null,\n      code: null });\n\n    if (game.players.length < 3) {\n      updateGame(game);\n    } else {\n      game.started_at = new Date();\n      _models.Topic.count().\n      then(function (count) {\n        var random = Math.random() * count | 0;\n        return _models.Topic.findOne().skip(random);\n      }).\n      then(function (topic) {\n        game.topic_idx = topic.idx;\n        updateGame(game);\n      });\n    }\n    console.log(games);\n  };\n\n  var updateGame = function updateGame(game) {\n    var data = _extends({}, game);\n    data.players = data.players.map(function (_ref) {var user_id = _ref.user_id,time = _ref.time;return { user_id: user_id, time: time };});\n    socket.emit('GAME_UPDATED', data);\n  };\n});exports.default =\n\nio;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmFja2VuZC9pby5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9iYWNrZW5kL2lvLmpzPzRjMjciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTt2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge3ZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07Zm9yICh2YXIga2V5IGluIHNvdXJjZSkge2lmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7dGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTt9fX1yZXR1cm4gdGFyZ2V0O307dmFyIF9zb2NrZXQgPSByZXF1aXJlKCdzb2NrZXQuaW8nKTt2YXIgX3NvY2tldDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zb2NrZXQpO1xudmFyIF9tb2RlbHMgPSByZXF1aXJlKCcvbW9kZWxzJyk7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtyZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTt9XG5cbnZhciBpbyA9ICgwLCBfc29ja2V0Mi5kZWZhdWx0KSgpO1xudmFyIGdhbWVzID0gW107XG5pby5vbignY29ubmVjdGlvbicsIGZ1bmN0aW9uIChzb2NrZXQpIHtcbiAgc29ja2V0Lm9uKCdBVVRIJywgZnVuY3Rpb24gKGRhdGEpIHt2YXJcbiAgICB0b2tlbiA9IGRhdGEudG9rZW47XG4gICAgX21vZGVscy5BdXRoLnZlcmlmeSh0b2tlbikuXG4gICAgdGhlbihmdW5jdGlvbiAoYXV0aCkge3JldHVybiBfbW9kZWxzLkF1dGgucG9wdWxhdGUoYXV0aCwgJ3VzZXInKTt9KS5cbiAgICB0aGVuKGZ1bmN0aW9uIChhdXRoKSB7cmV0dXJuIGF1dGgucmVmcmVzaCgpO30pLlxuICAgIHRoZW4oZnVuY3Rpb24gKGF1dGgpIHtcbiAgICAgIHZhciB1c2VyX2lkID0gYXV0aC51c2VyLl9pZDtcbiAgICAgIGFzc2lnblBsYXllcih1c2VyX2lkKTtcbiAgICB9KS5cbiAgICBjYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICBzb2NrZXQuZGlzY29ubmVjdCgpO1xuICAgIH0pO1xuICB9KTtcblxuICB2YXIgYXNzaWduUGxheWVyID0gZnVuY3Rpb24gYXNzaWduUGxheWVyKHVzZXJfaWQpIHtcbiAgICB2YXIgZ2FtZSA9IGdhbWVzLmZpbmQoZnVuY3Rpb24gKGdhbWUpIHtyZXR1cm4gIWdhbWUuc3RhcnRlZF9hdDt9KTtcbiAgICBpZiAoIWdhbWUpIHtcbiAgICAgIGdhbWUgPSB7XG4gICAgICAgIHN0YXJ0ZWRfYXQ6IG51bGwsXG4gICAgICAgIHBsYXllcnM6IFtdLFxuICAgICAgICB0b3BpY19pZHg6IG51bGwgfTtcblxuICAgICAgZ2FtZXMucHVzaChnYW1lKTtcbiAgICB9XG4gICAgZ2FtZS5wbGF5ZXJzLnB1c2goe1xuICAgICAgdXNlcl9pZDogdXNlcl9pZCxcbiAgICAgIHNvY2tldDogc29ja2V0LFxuICAgICAgdGltZTogbnVsbCxcbiAgICAgIGNvZGU6IG51bGwgfSk7XG5cbiAgICBpZiAoZ2FtZS5wbGF5ZXJzLmxlbmd0aCA8IDMpIHtcbiAgICAgIHVwZGF0ZUdhbWUoZ2FtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdhbWUuc3RhcnRlZF9hdCA9IG5ldyBEYXRlKCk7XG4gICAgICBfbW9kZWxzLlRvcGljLmNvdW50KCkuXG4gICAgICB0aGVuKGZ1bmN0aW9uIChjb3VudCkge1xuICAgICAgICB2YXIgcmFuZG9tID0gTWF0aC5yYW5kb20oKSAqIGNvdW50IHwgMDtcbiAgICAgICAgcmV0dXJuIF9tb2RlbHMuVG9waWMuZmluZE9uZSgpLnNraXAocmFuZG9tKTtcbiAgICAgIH0pLlxuICAgICAgdGhlbihmdW5jdGlvbiAodG9waWMpIHtcbiAgICAgICAgZ2FtZS50b3BpY19pZHggPSB0b3BpYy5pZHg7XG4gICAgICAgIHVwZGF0ZUdhbWUoZ2FtZSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coZ2FtZXMpO1xuICB9O1xuXG4gIHZhciB1cGRhdGVHYW1lID0gZnVuY3Rpb24gdXBkYXRlR2FtZShnYW1lKSB7XG4gICAgdmFyIGRhdGEgPSBfZXh0ZW5kcyh7fSwgZ2FtZSk7XG4gICAgZGF0YS5wbGF5ZXJzID0gZGF0YS5wbGF5ZXJzLm1hcChmdW5jdGlvbiAoX3JlZikge3ZhciB1c2VyX2lkID0gX3JlZi51c2VyX2lkLHRpbWUgPSBfcmVmLnRpbWU7cmV0dXJuIHsgdXNlcl9pZDogdXNlcl9pZCwgdGltZTogdGltZSB9O30pO1xuICAgIHNvY2tldC5lbWl0KCdHQU1FX1VQREFURUQnLCBkYXRhKTtcbiAgfTtcbn0pO2V4cG9ydHMuZGVmYXVsdCA9XG5cbmlvO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2JhY2tlbmQvaW8uanNcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL2JhY2tlbmQvaW8uanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/backend/io.js\n");

/***/ })

};