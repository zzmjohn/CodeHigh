exports.id = 0;
exports.modules = {

/***/ "./src/backend/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.io = exports.app = undefined;var _express = __webpack_require__(\"express\");var _express2 = _interopRequireDefault(_express);\nvar _morgan = __webpack_require__(\"morgan\");var _morgan2 = _interopRequireDefault(_morgan);\nvar _cookieParser = __webpack_require__(\"cookie-parser\");var _cookieParser2 = _interopRequireDefault(_cookieParser);\nvar _bodyParser = __webpack_require__(\"body-parser\");var _bodyParser2 = _interopRequireDefault(_bodyParser);\nvar _controllers = __webpack_require__(\"./src/backend/controllers/index.js\");var _controllers2 = _interopRequireDefault(_controllers);\nvar _db = __webpack_require__(\"./src/backend/common/db.js\");var _db2 = _interopRequireDefault(_db);\nvar _io = __webpack_require__(\"./src/backend/io.js\");var _io2 = _interopRequireDefault(_io);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\nvar app = (0, _express2.default)();\n_db2.default.on('error', console.error);\n_db2.default.once('open', function () {\n  app.use((0, _morgan2.default)('tiny'));\n  app.use((0, _cookieParser2.default)());\n  app.use(_bodyParser2.default.json());\n  app.use(_bodyParser2.default.urlencoded({ extended: true }));\n  app.use(_controllers2.default);\n});exports.\n\n\napp = app;exports.io = _io2.default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmFja2VuZC9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9iYWNrZW5kL2luZGV4LmpzP2VjMGUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtleHBvcnRzLmlvID0gZXhwb3J0cy5hcHAgPSB1bmRlZmluZWQ7dmFyIF9leHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO3ZhciBfZXhwcmVzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHByZXNzKTtcbnZhciBfbW9yZ2FuID0gcmVxdWlyZSgnbW9yZ2FuJyk7dmFyIF9tb3JnYW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbW9yZ2FuKTtcbnZhciBfY29va2llUGFyc2VyID0gcmVxdWlyZSgnY29va2llLXBhcnNlcicpO3ZhciBfY29va2llUGFyc2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nvb2tpZVBhcnNlcik7XG52YXIgX2JvZHlQYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpO3ZhciBfYm9keVBhcnNlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ib2R5UGFyc2VyKTtcbnZhciBfY29udHJvbGxlcnMgPSByZXF1aXJlKCcvY29udHJvbGxlcnMnKTt2YXIgX2NvbnRyb2xsZXJzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbnRyb2xsZXJzKTtcbnZhciBfZGIgPSByZXF1aXJlKCcvY29tbW9uL2RiJyk7dmFyIF9kYjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kYik7XG52YXIgX2lvID0gcmVxdWlyZSgnLi9pbycpO3ZhciBfaW8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW8pO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7cmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07fVxuXG52YXIgYXBwID0gKDAsIF9leHByZXNzMi5kZWZhdWx0KSgpO1xuX2RiMi5kZWZhdWx0Lm9uKCdlcnJvcicsIGNvbnNvbGUuZXJyb3IpO1xuX2RiMi5kZWZhdWx0Lm9uY2UoJ29wZW4nLCBmdW5jdGlvbiAoKSB7XG4gIGFwcC51c2UoKDAsIF9tb3JnYW4yLmRlZmF1bHQpKCd0aW55JykpO1xuICBhcHAudXNlKCgwLCBfY29va2llUGFyc2VyMi5kZWZhdWx0KSgpKTtcbiAgYXBwLnVzZShfYm9keVBhcnNlcjIuZGVmYXVsdC5qc29uKCkpO1xuICBhcHAudXNlKF9ib2R5UGFyc2VyMi5kZWZhdWx0LnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XG4gIGFwcC51c2UoX2NvbnRyb2xsZXJzMi5kZWZhdWx0KTtcbn0pO2V4cG9ydHMuXG5cblxuYXBwID0gYXBwO2V4cG9ydHMuaW8gPSBfaW8yLmRlZmF1bHQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmFja2VuZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvYmFja2VuZC9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/backend/index.js\n");

/***/ }),

/***/ "./src/backend/io.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _socket = __webpack_require__(\"socket.io\");var _socket2 = _interopRequireDefault(_socket);\nvar _models = __webpack_require__(\"./src/backend/models/index.js\");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\nvar io = (0, _socket2.default)();\nvar games = [];\nio.on('connection', function (socket) {\n  socket.on('HANDSHAKE', function (data) {var\n    token = data.token;\n    console.log(token);\n    _models.Auth.verify(token).\n    then(function (auth) {return _models.Auth.populate(auth, 'user');}).\n    then(function (auth) {return auth.refresh();}).\n    then(function (auth) {\n      var user_idx = auth.user.idx;\n      assignPlayer(user_idx);\n    }).\n    catch(function (err) {\n      console.error(err);\n      socket.disconnect();\n    });\n  });\n\n  var assignPlayer = function assignPlayer(user_idx) {\n    var game = games.find(function (game) {return game.started;});\n    if (!game) {\n      game = {\n        started_at: null,\n        players: [],\n        topic_idx: null };\n\n      games.push(game);\n    }\n    game.players.push({\n      user_idx: user_idx,\n      socket: socket,\n      time: null,\n      code: null });\n\n    if (game.players.length < 3) {\n      updateGame(game);\n    } else {\n      game.started_at = new Date();\n      _models.Topic.count().\n      then(function (count) {\n        var random = Math.random() * count | 0;\n        return _models.Topic.findOne().skip(random);\n      }).\n      then(function (topic) {\n        game.topic_idx = topic.idx;\n        updateGame(game);\n      });\n    }\n  };\n\n  var updateGame = function updateGame(game) {\n    var data = _extends({}, game);\n    data.players = data.players.map(function (_ref) {var user_idx = _ref.user_idx,time = _ref.time;return { user_idx: user_idx, time: time };});\n    socket.emit('GAME_UPDATED', game);\n  };\n});exports.default =\n\nio;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmFja2VuZC9pby5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9iYWNrZW5kL2lvLmpzPzRjMjciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTt2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge3ZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07Zm9yICh2YXIga2V5IGluIHNvdXJjZSkge2lmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7dGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTt9fX1yZXR1cm4gdGFyZ2V0O307dmFyIF9zb2NrZXQgPSByZXF1aXJlKCdzb2NrZXQuaW8nKTt2YXIgX3NvY2tldDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zb2NrZXQpO1xudmFyIF9tb2RlbHMgPSByZXF1aXJlKCcvbW9kZWxzJyk7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtyZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTt9XG5cbnZhciBpbyA9ICgwLCBfc29ja2V0Mi5kZWZhdWx0KSgpO1xudmFyIGdhbWVzID0gW107XG5pby5vbignY29ubmVjdGlvbicsIGZ1bmN0aW9uIChzb2NrZXQpIHtcbiAgc29ja2V0Lm9uKCdIQU5EU0hBS0UnLCBmdW5jdGlvbiAoZGF0YSkge3ZhclxuICAgIHRva2VuID0gZGF0YS50b2tlbjtcbiAgICBjb25zb2xlLmxvZyh0b2tlbik7XG4gICAgX21vZGVscy5BdXRoLnZlcmlmeSh0b2tlbikuXG4gICAgdGhlbihmdW5jdGlvbiAoYXV0aCkge3JldHVybiBfbW9kZWxzLkF1dGgucG9wdWxhdGUoYXV0aCwgJ3VzZXInKTt9KS5cbiAgICB0aGVuKGZ1bmN0aW9uIChhdXRoKSB7cmV0dXJuIGF1dGgucmVmcmVzaCgpO30pLlxuICAgIHRoZW4oZnVuY3Rpb24gKGF1dGgpIHtcbiAgICAgIHZhciB1c2VyX2lkeCA9IGF1dGgudXNlci5pZHg7XG4gICAgICBhc3NpZ25QbGF5ZXIodXNlcl9pZHgpO1xuICAgIH0pLlxuICAgIGNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIHNvY2tldC5kaXNjb25uZWN0KCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHZhciBhc3NpZ25QbGF5ZXIgPSBmdW5jdGlvbiBhc3NpZ25QbGF5ZXIodXNlcl9pZHgpIHtcbiAgICB2YXIgZ2FtZSA9IGdhbWVzLmZpbmQoZnVuY3Rpb24gKGdhbWUpIHtyZXR1cm4gZ2FtZS5zdGFydGVkO30pO1xuICAgIGlmICghZ2FtZSkge1xuICAgICAgZ2FtZSA9IHtcbiAgICAgICAgc3RhcnRlZF9hdDogbnVsbCxcbiAgICAgICAgcGxheWVyczogW10sXG4gICAgICAgIHRvcGljX2lkeDogbnVsbCB9O1xuXG4gICAgICBnYW1lcy5wdXNoKGdhbWUpO1xuICAgIH1cbiAgICBnYW1lLnBsYXllcnMucHVzaCh7XG4gICAgICB1c2VyX2lkeDogdXNlcl9pZHgsXG4gICAgICBzb2NrZXQ6IHNvY2tldCxcbiAgICAgIHRpbWU6IG51bGwsXG4gICAgICBjb2RlOiBudWxsIH0pO1xuXG4gICAgaWYgKGdhbWUucGxheWVycy5sZW5ndGggPCAzKSB7XG4gICAgICB1cGRhdGVHYW1lKGdhbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnYW1lLnN0YXJ0ZWRfYXQgPSBuZXcgRGF0ZSgpO1xuICAgICAgX21vZGVscy5Ub3BpYy5jb3VudCgpLlxuICAgICAgdGhlbihmdW5jdGlvbiAoY291bnQpIHtcbiAgICAgICAgdmFyIHJhbmRvbSA9IE1hdGgucmFuZG9tKCkgKiBjb3VudCB8IDA7XG4gICAgICAgIHJldHVybiBfbW9kZWxzLlRvcGljLmZpbmRPbmUoKS5za2lwKHJhbmRvbSk7XG4gICAgICB9KS5cbiAgICAgIHRoZW4oZnVuY3Rpb24gKHRvcGljKSB7XG4gICAgICAgIGdhbWUudG9waWNfaWR4ID0gdG9waWMuaWR4O1xuICAgICAgICB1cGRhdGVHYW1lKGdhbWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciB1cGRhdGVHYW1lID0gZnVuY3Rpb24gdXBkYXRlR2FtZShnYW1lKSB7XG4gICAgdmFyIGRhdGEgPSBfZXh0ZW5kcyh7fSwgZ2FtZSk7XG4gICAgZGF0YS5wbGF5ZXJzID0gZGF0YS5wbGF5ZXJzLm1hcChmdW5jdGlvbiAoX3JlZikge3ZhciB1c2VyX2lkeCA9IF9yZWYudXNlcl9pZHgsdGltZSA9IF9yZWYudGltZTtyZXR1cm4geyB1c2VyX2lkeDogdXNlcl9pZHgsIHRpbWU6IHRpbWUgfTt9KTtcbiAgICBzb2NrZXQuZW1pdCgnR0FNRV9VUERBVEVEJywgZ2FtZSk7XG4gIH07XG59KTtleHBvcnRzLmRlZmF1bHQgPVxuXG5pbztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9iYWNrZW5kL2lvLmpzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9iYWNrZW5kL2lvLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/backend/io.js\n");

/***/ }),

/***/ "./src/backend/socket.js":
false

};