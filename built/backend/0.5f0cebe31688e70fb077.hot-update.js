exports.id = 0;
exports.modules = {

/***/ "./src/backend/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.io = exports.app = undefined;var _express = __webpack_require__(\"express\");var _express2 = _interopRequireDefault(_express);\nvar _morgan = __webpack_require__(\"morgan\");var _morgan2 = _interopRequireDefault(_morgan);\nvar _cookieParser = __webpack_require__(\"cookie-parser\");var _cookieParser2 = _interopRequireDefault(_cookieParser);\nvar _bodyParser = __webpack_require__(\"body-parser\");var _bodyParser2 = _interopRequireDefault(_bodyParser);\nvar _controllers = __webpack_require__(\"./src/backend/controllers/index.js\");var _controllers2 = _interopRequireDefault(_controllers);\nvar _db = __webpack_require__(\"./src/backend/common/db.js\");var _db2 = _interopRequireDefault(_db);\nvar _socket = __webpack_require__(\"socket.io\");var _socket2 = _interopRequireDefault(_socket);\nvar _models = __webpack_require__(\"./src/backend/models/index.js\");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\nvar app = (0, _express2.default)();\n_db2.default.on('error', console.error);\n_db2.default.once('open', function () {\n  app.use((0, _morgan2.default)('tiny'));\n  app.use((0, _cookieParser2.default)());\n  app.use(_bodyParser2.default.json());\n  app.use(_bodyParser2.default.urlencoded({ extended: true }));\n  app.use(_controllers2.default);\n});\nvar io = (0, _socket2.default)();\nvar games = [];\nio.on('connection', function (socket) {\n  socket.on('HANDSHAKE', function (data) {var\n    token = data.token;\n    _models.Auth.verify(token).\n    then(function (auth) {return _models.Auth.populate(auth, 'user');}).\n    then(function (auth) {return auth.refresh();}).\n    then(function (auth) {\n      var user_idx = auth.user.idx;\n    }).\n    catch(next);\n\n    var game = games.find(function (game) {return game.started;});\n    if (!game) {\n      game = {\n        started: false,\n        players: [],\n        topic_idx: null };\n\n      games.push(game);\n    }\n    game.players.push({\n      user_idx: user_idx,\n      socket: socket,\n      submitted_at: null,\n      code: null });\n\n\n    socket.emit('GAME_UPDATED', game);\n  });\n});exports.\n\napp = app;exports.io = io;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmFja2VuZC9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9iYWNrZW5kL2luZGV4LmpzP2VjMGUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtleHBvcnRzLmlvID0gZXhwb3J0cy5hcHAgPSB1bmRlZmluZWQ7dmFyIF9leHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO3ZhciBfZXhwcmVzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHByZXNzKTtcbnZhciBfbW9yZ2FuID0gcmVxdWlyZSgnbW9yZ2FuJyk7dmFyIF9tb3JnYW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbW9yZ2FuKTtcbnZhciBfY29va2llUGFyc2VyID0gcmVxdWlyZSgnY29va2llLXBhcnNlcicpO3ZhciBfY29va2llUGFyc2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nvb2tpZVBhcnNlcik7XG52YXIgX2JvZHlQYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpO3ZhciBfYm9keVBhcnNlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ib2R5UGFyc2VyKTtcbnZhciBfY29udHJvbGxlcnMgPSByZXF1aXJlKCcvY29udHJvbGxlcnMnKTt2YXIgX2NvbnRyb2xsZXJzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbnRyb2xsZXJzKTtcbnZhciBfZGIgPSByZXF1aXJlKCcvY29tbW9uL2RiJyk7dmFyIF9kYjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kYik7XG52YXIgX3NvY2tldCA9IHJlcXVpcmUoJ3NvY2tldC5pbycpO3ZhciBfc29ja2V0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NvY2tldCk7XG52YXIgX21vZGVscyA9IHJlcXVpcmUoJy9tb2RlbHMnKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge3JldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9O31cblxudmFyIGFwcCA9ICgwLCBfZXhwcmVzczIuZGVmYXVsdCkoKTtcbl9kYjIuZGVmYXVsdC5vbignZXJyb3InLCBjb25zb2xlLmVycm9yKTtcbl9kYjIuZGVmYXVsdC5vbmNlKCdvcGVuJywgZnVuY3Rpb24gKCkge1xuICBhcHAudXNlKCgwLCBfbW9yZ2FuMi5kZWZhdWx0KSgndGlueScpKTtcbiAgYXBwLnVzZSgoMCwgX2Nvb2tpZVBhcnNlcjIuZGVmYXVsdCkoKSk7XG4gIGFwcC51c2UoX2JvZHlQYXJzZXIyLmRlZmF1bHQuanNvbigpKTtcbiAgYXBwLnVzZShfYm9keVBhcnNlcjIuZGVmYXVsdC51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuICBhcHAudXNlKF9jb250cm9sbGVyczIuZGVmYXVsdCk7XG59KTtcbnZhciBpbyA9ICgwLCBfc29ja2V0Mi5kZWZhdWx0KSgpO1xudmFyIGdhbWVzID0gW107XG5pby5vbignY29ubmVjdGlvbicsIGZ1bmN0aW9uIChzb2NrZXQpIHtcbiAgc29ja2V0Lm9uKCdIQU5EU0hBS0UnLCBmdW5jdGlvbiAoZGF0YSkge3ZhclxuICAgIHRva2VuID0gZGF0YS50b2tlbjtcbiAgICBfbW9kZWxzLkF1dGgudmVyaWZ5KHRva2VuKS5cbiAgICB0aGVuKGZ1bmN0aW9uIChhdXRoKSB7cmV0dXJuIF9tb2RlbHMuQXV0aC5wb3B1bGF0ZShhdXRoLCAndXNlcicpO30pLlxuICAgIHRoZW4oZnVuY3Rpb24gKGF1dGgpIHtyZXR1cm4gYXV0aC5yZWZyZXNoKCk7fSkuXG4gICAgdGhlbihmdW5jdGlvbiAoYXV0aCkge1xuICAgICAgdmFyIHVzZXJfaWR4ID0gYXV0aC51c2VyLmlkeDtcbiAgICB9KS5cbiAgICBjYXRjaChuZXh0KTtcblxuICAgIHZhciBnYW1lID0gZ2FtZXMuZmluZChmdW5jdGlvbiAoZ2FtZSkge3JldHVybiBnYW1lLnN0YXJ0ZWQ7fSk7XG4gICAgaWYgKCFnYW1lKSB7XG4gICAgICBnYW1lID0ge1xuICAgICAgICBzdGFydGVkOiBmYWxzZSxcbiAgICAgICAgcGxheWVyczogW10sXG4gICAgICAgIHRvcGljX2lkeDogbnVsbCB9O1xuXG4gICAgICBnYW1lcy5wdXNoKGdhbWUpO1xuICAgIH1cbiAgICBnYW1lLnBsYXllcnMucHVzaCh7XG4gICAgICB1c2VyX2lkeDogdXNlcl9pZHgsXG4gICAgICBzb2NrZXQ6IHNvY2tldCxcbiAgICAgIHN1Ym1pdHRlZF9hdDogbnVsbCxcbiAgICAgIGNvZGU6IG51bGwgfSk7XG5cblxuICAgIHNvY2tldC5lbWl0KCdHQU1FX1VQREFURUQnLCBnYW1lKTtcbiAgfSk7XG59KTtleHBvcnRzLlxuXG5hcHAgPSBhcHA7ZXhwb3J0cy5pbyA9IGlvO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2JhY2tlbmQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL2JhY2tlbmQvaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/backend/index.js\n");

/***/ })

};