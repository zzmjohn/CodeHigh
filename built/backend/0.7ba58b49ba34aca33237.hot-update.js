exports.id = 0;
exports.modules = {

/***/ "./src/backend/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.io = exports.app = undefined;var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _express = __webpack_require__(\"express\");var _express2 = _interopRequireDefault(_express);\nvar _morgan = __webpack_require__(\"morgan\");var _morgan2 = _interopRequireDefault(_morgan);\nvar _cookieParser = __webpack_require__(\"cookie-parser\");var _cookieParser2 = _interopRequireDefault(_cookieParser);\nvar _bodyParser = __webpack_require__(\"body-parser\");var _bodyParser2 = _interopRequireDefault(_bodyParser);\nvar _controllers = __webpack_require__(\"./src/backend/controllers/index.js\");var _controllers2 = _interopRequireDefault(_controllers);\nvar _db = __webpack_require__(\"./src/backend/common/db.js\");var _db2 = _interopRequireDefault(_db);\nvar _socket = __webpack_require__(\"socket.io\");var _socket2 = _interopRequireDefault(_socket);\nvar _models = __webpack_require__(\"./src/backend/models/index.js\");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\nvar io = (0, _socket2.default)();\nvar games = [];\nio.on('connection', function (socket) {\n  socket.on('HANDSHAKE', function (data) {var\n    token = data.token;\n    console.log(token);\n    _models.Auth.verify(token).\n    then(function (auth) {return _models.Auth.populate(auth, 'user');}).\n    then(function (auth) {return auth.refresh();}).\n    then(function (auth) {\n      var user_idx = auth.user.idx;\n      assignPlayer(user_idx);\n    }).\n    catch(function (err) {\n      console.error(err);\n      //socket.disconnect()\n    });\n  });\n\n  var assignPlayer = function assignPlayer(user_idx) {\n    var game = games.find(function (game) {return game.started;});\n    if (!game) {\n      game = {\n        started_at: null,\n        players: [],\n        topic_idx: null };\n\n      games.push(game);\n    }\n    game.players.push({\n      user_idx: user_idx,\n      socket: socket,\n      time: null,\n      code: null });\n\n    if (game.players.length < 3) {\n      updateGame(game);\n    } else {\n      game.started_at = new Date();\n      _models.Topic.count().\n      then(function (count) {\n        var random = Math.random() * count | 0;\n        return _models.Topic.findOne().skip(random);\n      }).\n      then(function (topic) {\n        game.topic_idx = topic.idx;\n        updateGame(game);\n      });\n    }\n  };\n\n  var updateGame = function updateGame(game) {\n    var data = _extends({}, game);\n    data.players = data.players.map(function (_ref) {var user_idx = _ref.user_idx,time = _ref.time;return { user_idx: user_idx, time: time };});\n    socket.emit('GAME_UPDATED', game);\n  };\n});\n\nvar app = (0, _express2.default)();\n_db2.default.on('error', console.error);\n_db2.default.once('open', function () {\n  app.use((0, _morgan2.default)('tiny'));\n  app.use((0, _cookieParser2.default)());\n  app.use(_bodyParser2.default.json());\n  app.use(_bodyParser2.default.urlencoded({ extended: true }));\n  app.use(_controllers2.default);\n});exports.\n\napp = app;exports.io = io;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmFja2VuZC9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9iYWNrZW5kL2luZGV4LmpzP2VjMGUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtleHBvcnRzLmlvID0gZXhwb3J0cy5hcHAgPSB1bmRlZmluZWQ7dmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7Zm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHt2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO2ZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge3RhcmdldFtrZXldID0gc291cmNlW2tleV07fX19cmV0dXJuIHRhcmdldDt9O3ZhciBfZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTt2YXIgX2V4cHJlc3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXhwcmVzcyk7XG52YXIgX21vcmdhbiA9IHJlcXVpcmUoJ21vcmdhbicpO3ZhciBfbW9yZ2FuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21vcmdhbik7XG52YXIgX2Nvb2tpZVBhcnNlciA9IHJlcXVpcmUoJ2Nvb2tpZS1wYXJzZXInKTt2YXIgX2Nvb2tpZVBhcnNlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb29raWVQYXJzZXIpO1xudmFyIF9ib2R5UGFyc2VyID0gcmVxdWlyZSgnYm9keS1wYXJzZXInKTt2YXIgX2JvZHlQYXJzZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYm9keVBhcnNlcik7XG52YXIgX2NvbnRyb2xsZXJzID0gcmVxdWlyZSgnL2NvbnRyb2xsZXJzJyk7dmFyIF9jb250cm9sbGVyczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb250cm9sbGVycyk7XG52YXIgX2RiID0gcmVxdWlyZSgnL2NvbW1vbi9kYicpO3ZhciBfZGIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGIpO1xudmFyIF9zb2NrZXQgPSByZXF1aXJlKCdzb2NrZXQuaW8nKTt2YXIgX3NvY2tldDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zb2NrZXQpO1xudmFyIF9tb2RlbHMgPSByZXF1aXJlKCcvbW9kZWxzJyk7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtyZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTt9XG5cbnZhciBpbyA9ICgwLCBfc29ja2V0Mi5kZWZhdWx0KSgpO1xudmFyIGdhbWVzID0gW107XG5pby5vbignY29ubmVjdGlvbicsIGZ1bmN0aW9uIChzb2NrZXQpIHtcbiAgc29ja2V0Lm9uKCdIQU5EU0hBS0UnLCBmdW5jdGlvbiAoZGF0YSkge3ZhclxuICAgIHRva2VuID0gZGF0YS50b2tlbjtcbiAgICBjb25zb2xlLmxvZyh0b2tlbik7XG4gICAgX21vZGVscy5BdXRoLnZlcmlmeSh0b2tlbikuXG4gICAgdGhlbihmdW5jdGlvbiAoYXV0aCkge3JldHVybiBfbW9kZWxzLkF1dGgucG9wdWxhdGUoYXV0aCwgJ3VzZXInKTt9KS5cbiAgICB0aGVuKGZ1bmN0aW9uIChhdXRoKSB7cmV0dXJuIGF1dGgucmVmcmVzaCgpO30pLlxuICAgIHRoZW4oZnVuY3Rpb24gKGF1dGgpIHtcbiAgICAgIHZhciB1c2VyX2lkeCA9IGF1dGgudXNlci5pZHg7XG4gICAgICBhc3NpZ25QbGF5ZXIodXNlcl9pZHgpO1xuICAgIH0pLlxuICAgIGNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIC8vc29ja2V0LmRpc2Nvbm5lY3QoKVxuICAgIH0pO1xuICB9KTtcblxuICB2YXIgYXNzaWduUGxheWVyID0gZnVuY3Rpb24gYXNzaWduUGxheWVyKHVzZXJfaWR4KSB7XG4gICAgdmFyIGdhbWUgPSBnYW1lcy5maW5kKGZ1bmN0aW9uIChnYW1lKSB7cmV0dXJuIGdhbWUuc3RhcnRlZDt9KTtcbiAgICBpZiAoIWdhbWUpIHtcbiAgICAgIGdhbWUgPSB7XG4gICAgICAgIHN0YXJ0ZWRfYXQ6IG51bGwsXG4gICAgICAgIHBsYXllcnM6IFtdLFxuICAgICAgICB0b3BpY19pZHg6IG51bGwgfTtcblxuICAgICAgZ2FtZXMucHVzaChnYW1lKTtcbiAgICB9XG4gICAgZ2FtZS5wbGF5ZXJzLnB1c2goe1xuICAgICAgdXNlcl9pZHg6IHVzZXJfaWR4LFxuICAgICAgc29ja2V0OiBzb2NrZXQsXG4gICAgICB0aW1lOiBudWxsLFxuICAgICAgY29kZTogbnVsbCB9KTtcblxuICAgIGlmIChnYW1lLnBsYXllcnMubGVuZ3RoIDwgMykge1xuICAgICAgdXBkYXRlR2FtZShnYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2FtZS5zdGFydGVkX2F0ID0gbmV3IERhdGUoKTtcbiAgICAgIF9tb2RlbHMuVG9waWMuY291bnQoKS5cbiAgICAgIHRoZW4oZnVuY3Rpb24gKGNvdW50KSB7XG4gICAgICAgIHZhciByYW5kb20gPSBNYXRoLnJhbmRvbSgpICogY291bnQgfCAwO1xuICAgICAgICByZXR1cm4gX21vZGVscy5Ub3BpYy5maW5kT25lKCkuc2tpcChyYW5kb20pO1xuICAgICAgfSkuXG4gICAgICB0aGVuKGZ1bmN0aW9uICh0b3BpYykge1xuICAgICAgICBnYW1lLnRvcGljX2lkeCA9IHRvcGljLmlkeDtcbiAgICAgICAgdXBkYXRlR2FtZShnYW1lKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICB2YXIgdXBkYXRlR2FtZSA9IGZ1bmN0aW9uIHVwZGF0ZUdhbWUoZ2FtZSkge1xuICAgIHZhciBkYXRhID0gX2V4dGVuZHMoe30sIGdhbWUpO1xuICAgIGRhdGEucGxheWVycyA9IGRhdGEucGxheWVycy5tYXAoZnVuY3Rpb24gKF9yZWYpIHt2YXIgdXNlcl9pZHggPSBfcmVmLnVzZXJfaWR4LHRpbWUgPSBfcmVmLnRpbWU7cmV0dXJuIHsgdXNlcl9pZHg6IHVzZXJfaWR4LCB0aW1lOiB0aW1lIH07fSk7XG4gICAgc29ja2V0LmVtaXQoJ0dBTUVfVVBEQVRFRCcsIGdhbWUpO1xuICB9O1xufSk7XG5cbnZhciBhcHAgPSAoMCwgX2V4cHJlc3MyLmRlZmF1bHQpKCk7XG5fZGIyLmRlZmF1bHQub24oJ2Vycm9yJywgY29uc29sZS5lcnJvcik7XG5fZGIyLmRlZmF1bHQub25jZSgnb3BlbicsIGZ1bmN0aW9uICgpIHtcbiAgYXBwLnVzZSgoMCwgX21vcmdhbjIuZGVmYXVsdCkoJ3RpbnknKSk7XG4gIGFwcC51c2UoKDAsIF9jb29raWVQYXJzZXIyLmRlZmF1bHQpKCkpO1xuICBhcHAudXNlKF9ib2R5UGFyc2VyMi5kZWZhdWx0Lmpzb24oKSk7XG4gIGFwcC51c2UoX2JvZHlQYXJzZXIyLmRlZmF1bHQudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcbiAgYXBwLnVzZShfY29udHJvbGxlcnMyLmRlZmF1bHQpO1xufSk7ZXhwb3J0cy5cblxuYXBwID0gYXBwO2V4cG9ydHMuaW8gPSBpbztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9iYWNrZW5kL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9iYWNrZW5kL2luZGV4LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/backend/index.js\n");

/***/ }),

/***/ "./src/backend/io.js":
false

};