exports.id = 0;
exports.modules = {

/***/ "./src/backend/io.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });var _socket = __webpack_require__(\"socket.io\");var _socket2 = _interopRequireDefault(_socket);\nvar _models = __webpack_require__(\"./src/backend/models/index.js\");\nvar _randomstring = __webpack_require__(\"randomstring\");var _randomstring2 = _interopRequireDefault(_randomstring);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\nvar io = (0, _socket2.default)();\nvar games = [];\nio.on('connection', function (socket) {\n  var socketUser = null;\n\n  socket.on('AUTH', function (data) {var\n    token = data.token;\n    _models.Auth.verify(token).\n    then(function (auth) {return _models.Auth.populate(auth, 'user');}).\n    then(function (auth) {return auth.refresh();}).\n    then(function (auth) {\n      socketUser = auth.user;var _auth$user =\n      auth.user,fb_user_id = _auth$user.fb_user_id,name = _auth$user.name;\n      assignPlayer({ fb_user_id: fb_user_id, name: name });\n    }).\n    catch(function (err) {\n      console.error(err);\n      socket.disconnect();\n    });\n  });\n\n  var assignPlayer = function assignPlayer(user) {\n    var game = games.find(function (game) {return game.players.some(function (player) {return !game.finished_at && user.fb_user_id === player.user.fb_user_id;});});\n    if (!game) {\n      game = games.find(function (game) {return !game.started_at;});\n    }\n    if (!game) {\n      game = {\n        room: _randomstring2.default.generate(),\n        started_at: null,\n        updated_at: null,\n        finished_at: null,\n        players: [],\n        topic_id: null,\n        topic_time: null };\n\n      games.push(game);\n    }\n    socket.join(game.room);\n\n    var player = game.players.find(function (player) {return user.fb_user_id === player.user.fb_user_id;});\n    if (!player) {\n      player = {\n        user: user,\n        submitted_at: null,\n        given_up_at: null,\n        code: null,\n        typing: false,\n        solution_id: null,\n        ratings: [] };\n\n      game.players.push(player);\n    }\n\n    if (game.started_at || game.players.length < 2) {\n      updateGame(game);\n    } else {\n      game.started_at = new Date();\n      _models.Topic.count().\n      then(function (count) {\n        var random = Math.random() * count | 0;\n        return _models.Topic.findOne().skip(random);\n      }).\n      then(function (topic) {\n        game.topic_id = topic._id;\n        game.topic_time = topic.time;\n        updateGame(game);\n      }).\n      catch(console.error);\n    }\n\n    socket.on('START_TYPING', function () {\n      player.typing = true;\n      updateGame(game);\n    });\n    socket.on('STOP_TYPING', function () {\n      player.typing = false;\n      updateGame(game);\n    });\n    socket.on('SUBMIT', function (code) {\n      player.submitted_at = new Date();\n      player.code = code;\n      new _models.Solution({\n        topic: game.topic_id,\n        time: (player.submitted_at - game.started_at) / 1000,\n        code: code }).\n      setAuthor(socketUser).save().\n      then(function (solution) {\n        player.solution_id = solution._id;\n        updateGame(game);\n      }).\n      catch(console.error);\n    });\n    socket.on('GIVE_UP', function () {\n      player.given_up_at = new Date();\n      updateGame(game);\n    });\n    socket.on('RATE', function (data) {var\n      solution = data.solution_id,stars = data.stars;\n      var authors = [socketUser];\n      var query = { solution: solution, authors: authors };\n      var body = { solution: solution, stars: stars, authors: authors };\n      _models.Rating.findOneAndUpdate(query, body, { upsert: true }).\n      then(function () {return _models.Rating.find({ solution: solution }).populate('authors');}).\n      then(function (ratings) {\n        var ratedPlayer = game.players.find(function (player) {return player.solution_id && player.solution_id.equals(solution);});\n        ratedPlayer.ratings = ratings.map(function (rating) {\n          var fb_user_id = rating.authors[0].fb_user_id;\n          var stars = rating.stars;\n          return { fb_user_id: fb_user_id, stars: stars };\n        });\n        updateGame(game);\n      }).\n      catch(console.error);\n    });\n  };\n\n  var updateGame = function updateGame(game) {\n    game.updated_at = new Date();\n    var all_submitted = game.players.every(function (player) {return player.submitted_at || player.given_up_at;});\n    var time_done = game.topic_id && (game.updated_at - game.started_at) / 1000 > game.topic_time;\n    if (all_submitted || time_done) game.finished_at = game.updated_at;\n    console.log(game);\n    io.to(game.room).emit('GAME_UPDATED', game);\n  };\n});exports.default =\n\nio;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmFja2VuZC9pby5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9iYWNrZW5kL2lvLmpzPzRjMjciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTt2YXIgX3NvY2tldCA9IHJlcXVpcmUoJ3NvY2tldC5pbycpO3ZhciBfc29ja2V0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NvY2tldCk7XG52YXIgX21vZGVscyA9IHJlcXVpcmUoJy9tb2RlbHMnKTtcbnZhciBfcmFuZG9tc3RyaW5nID0gcmVxdWlyZSgncmFuZG9tc3RyaW5nJyk7dmFyIF9yYW5kb21zdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFuZG9tc3RyaW5nKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge3JldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9O31cblxudmFyIGlvID0gKDAsIF9zb2NrZXQyLmRlZmF1bHQpKCk7XG52YXIgZ2FtZXMgPSBbXTtcbmlvLm9uKCdjb25uZWN0aW9uJywgZnVuY3Rpb24gKHNvY2tldCkge1xuICB2YXIgc29ja2V0VXNlciA9IG51bGw7XG5cbiAgc29ja2V0Lm9uKCdBVVRIJywgZnVuY3Rpb24gKGRhdGEpIHt2YXJcbiAgICB0b2tlbiA9IGRhdGEudG9rZW47XG4gICAgX21vZGVscy5BdXRoLnZlcmlmeSh0b2tlbikuXG4gICAgdGhlbihmdW5jdGlvbiAoYXV0aCkge3JldHVybiBfbW9kZWxzLkF1dGgucG9wdWxhdGUoYXV0aCwgJ3VzZXInKTt9KS5cbiAgICB0aGVuKGZ1bmN0aW9uIChhdXRoKSB7cmV0dXJuIGF1dGgucmVmcmVzaCgpO30pLlxuICAgIHRoZW4oZnVuY3Rpb24gKGF1dGgpIHtcbiAgICAgIHNvY2tldFVzZXIgPSBhdXRoLnVzZXI7dmFyIF9hdXRoJHVzZXIgPVxuICAgICAgYXV0aC51c2VyLGZiX3VzZXJfaWQgPSBfYXV0aCR1c2VyLmZiX3VzZXJfaWQsbmFtZSA9IF9hdXRoJHVzZXIubmFtZTtcbiAgICAgIGFzc2lnblBsYXllcih7IGZiX3VzZXJfaWQ6IGZiX3VzZXJfaWQsIG5hbWU6IG5hbWUgfSk7XG4gICAgfSkuXG4gICAgY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgc29ja2V0LmRpc2Nvbm5lY3QoKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgdmFyIGFzc2lnblBsYXllciA9IGZ1bmN0aW9uIGFzc2lnblBsYXllcih1c2VyKSB7XG4gICAgdmFyIGdhbWUgPSBnYW1lcy5maW5kKGZ1bmN0aW9uIChnYW1lKSB7cmV0dXJuIGdhbWUucGxheWVycy5zb21lKGZ1bmN0aW9uIChwbGF5ZXIpIHtyZXR1cm4gIWdhbWUuZmluaXNoZWRfYXQgJiYgdXNlci5mYl91c2VyX2lkID09PSBwbGF5ZXIudXNlci5mYl91c2VyX2lkO30pO30pO1xuICAgIGlmICghZ2FtZSkge1xuICAgICAgZ2FtZSA9IGdhbWVzLmZpbmQoZnVuY3Rpb24gKGdhbWUpIHtyZXR1cm4gIWdhbWUuc3RhcnRlZF9hdDt9KTtcbiAgICB9XG4gICAgaWYgKCFnYW1lKSB7XG4gICAgICBnYW1lID0ge1xuICAgICAgICByb29tOiBfcmFuZG9tc3RyaW5nMi5kZWZhdWx0LmdlbmVyYXRlKCksXG4gICAgICAgIHN0YXJ0ZWRfYXQ6IG51bGwsXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG51bGwsXG4gICAgICAgIGZpbmlzaGVkX2F0OiBudWxsLFxuICAgICAgICBwbGF5ZXJzOiBbXSxcbiAgICAgICAgdG9waWNfaWQ6IG51bGwsXG4gICAgICAgIHRvcGljX3RpbWU6IG51bGwgfTtcblxuICAgICAgZ2FtZXMucHVzaChnYW1lKTtcbiAgICB9XG4gICAgc29ja2V0LmpvaW4oZ2FtZS5yb29tKTtcblxuICAgIHZhciBwbGF5ZXIgPSBnYW1lLnBsYXllcnMuZmluZChmdW5jdGlvbiAocGxheWVyKSB7cmV0dXJuIHVzZXIuZmJfdXNlcl9pZCA9PT0gcGxheWVyLnVzZXIuZmJfdXNlcl9pZDt9KTtcbiAgICBpZiAoIXBsYXllcikge1xuICAgICAgcGxheWVyID0ge1xuICAgICAgICB1c2VyOiB1c2VyLFxuICAgICAgICBzdWJtaXR0ZWRfYXQ6IG51bGwsXG4gICAgICAgIGdpdmVuX3VwX2F0OiBudWxsLFxuICAgICAgICBjb2RlOiBudWxsLFxuICAgICAgICB0eXBpbmc6IGZhbHNlLFxuICAgICAgICBzb2x1dGlvbl9pZDogbnVsbCxcbiAgICAgICAgcmF0aW5nczogW10gfTtcblxuICAgICAgZ2FtZS5wbGF5ZXJzLnB1c2gocGxheWVyKTtcbiAgICB9XG5cbiAgICBpZiAoZ2FtZS5zdGFydGVkX2F0IHx8IGdhbWUucGxheWVycy5sZW5ndGggPCAyKSB7XG4gICAgICB1cGRhdGVHYW1lKGdhbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnYW1lLnN0YXJ0ZWRfYXQgPSBuZXcgRGF0ZSgpO1xuICAgICAgX21vZGVscy5Ub3BpYy5jb3VudCgpLlxuICAgICAgdGhlbihmdW5jdGlvbiAoY291bnQpIHtcbiAgICAgICAgdmFyIHJhbmRvbSA9IE1hdGgucmFuZG9tKCkgKiBjb3VudCB8IDA7XG4gICAgICAgIHJldHVybiBfbW9kZWxzLlRvcGljLmZpbmRPbmUoKS5za2lwKHJhbmRvbSk7XG4gICAgICB9KS5cbiAgICAgIHRoZW4oZnVuY3Rpb24gKHRvcGljKSB7XG4gICAgICAgIGdhbWUudG9waWNfaWQgPSB0b3BpYy5faWQ7XG4gICAgICAgIGdhbWUudG9waWNfdGltZSA9IHRvcGljLnRpbWU7XG4gICAgICAgIHVwZGF0ZUdhbWUoZ2FtZSk7XG4gICAgICB9KS5cbiAgICAgIGNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuICAgIH1cblxuICAgIHNvY2tldC5vbignU1RBUlRfVFlQSU5HJywgZnVuY3Rpb24gKCkge1xuICAgICAgcGxheWVyLnR5cGluZyA9IHRydWU7XG4gICAgICB1cGRhdGVHYW1lKGdhbWUpO1xuICAgIH0pO1xuICAgIHNvY2tldC5vbignU1RPUF9UWVBJTkcnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBwbGF5ZXIudHlwaW5nID0gZmFsc2U7XG4gICAgICB1cGRhdGVHYW1lKGdhbWUpO1xuICAgIH0pO1xuICAgIHNvY2tldC5vbignU1VCTUlUJywgZnVuY3Rpb24gKGNvZGUpIHtcbiAgICAgIHBsYXllci5zdWJtaXR0ZWRfYXQgPSBuZXcgRGF0ZSgpO1xuICAgICAgcGxheWVyLmNvZGUgPSBjb2RlO1xuICAgICAgbmV3IF9tb2RlbHMuU29sdXRpb24oe1xuICAgICAgICB0b3BpYzogZ2FtZS50b3BpY19pZCxcbiAgICAgICAgdGltZTogKHBsYXllci5zdWJtaXR0ZWRfYXQgLSBnYW1lLnN0YXJ0ZWRfYXQpIC8gMTAwMCxcbiAgICAgICAgY29kZTogY29kZSB9KS5cbiAgICAgIHNldEF1dGhvcihzb2NrZXRVc2VyKS5zYXZlKCkuXG4gICAgICB0aGVuKGZ1bmN0aW9uIChzb2x1dGlvbikge1xuICAgICAgICBwbGF5ZXIuc29sdXRpb25faWQgPSBzb2x1dGlvbi5faWQ7XG4gICAgICAgIHVwZGF0ZUdhbWUoZ2FtZSk7XG4gICAgICB9KS5cbiAgICAgIGNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuICAgIH0pO1xuICAgIHNvY2tldC5vbignR0lWRV9VUCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHBsYXllci5naXZlbl91cF9hdCA9IG5ldyBEYXRlKCk7XG4gICAgICB1cGRhdGVHYW1lKGdhbWUpO1xuICAgIH0pO1xuICAgIHNvY2tldC5vbignUkFURScsIGZ1bmN0aW9uIChkYXRhKSB7dmFyXG4gICAgICBzb2x1dGlvbiA9IGRhdGEuc29sdXRpb25faWQsc3RhcnMgPSBkYXRhLnN0YXJzO1xuICAgICAgdmFyIGF1dGhvcnMgPSBbc29ja2V0VXNlcl07XG4gICAgICB2YXIgcXVlcnkgPSB7IHNvbHV0aW9uOiBzb2x1dGlvbiwgYXV0aG9yczogYXV0aG9ycyB9O1xuICAgICAgdmFyIGJvZHkgPSB7IHNvbHV0aW9uOiBzb2x1dGlvbiwgc3RhcnM6IHN0YXJzLCBhdXRob3JzOiBhdXRob3JzIH07XG4gICAgICBfbW9kZWxzLlJhdGluZy5maW5kT25lQW5kVXBkYXRlKHF1ZXJ5LCBib2R5LCB7IHVwc2VydDogdHJ1ZSB9KS5cbiAgICAgIHRoZW4oZnVuY3Rpb24gKCkge3JldHVybiBfbW9kZWxzLlJhdGluZy5maW5kKHsgc29sdXRpb246IHNvbHV0aW9uIH0pLnBvcHVsYXRlKCdhdXRob3JzJyk7fSkuXG4gICAgICB0aGVuKGZ1bmN0aW9uIChyYXRpbmdzKSB7XG4gICAgICAgIHZhciByYXRlZFBsYXllciA9IGdhbWUucGxheWVycy5maW5kKGZ1bmN0aW9uIChwbGF5ZXIpIHtyZXR1cm4gcGxheWVyLnNvbHV0aW9uX2lkICYmIHBsYXllci5zb2x1dGlvbl9pZC5lcXVhbHMoc29sdXRpb24pO30pO1xuICAgICAgICByYXRlZFBsYXllci5yYXRpbmdzID0gcmF0aW5ncy5tYXAoZnVuY3Rpb24gKHJhdGluZykge1xuICAgICAgICAgIHZhciBmYl91c2VyX2lkID0gcmF0aW5nLmF1dGhvcnNbMF0uZmJfdXNlcl9pZDtcbiAgICAgICAgICB2YXIgc3RhcnMgPSByYXRpbmcuc3RhcnM7XG4gICAgICAgICAgcmV0dXJuIHsgZmJfdXNlcl9pZDogZmJfdXNlcl9pZCwgc3RhcnM6IHN0YXJzIH07XG4gICAgICAgIH0pO1xuICAgICAgICB1cGRhdGVHYW1lKGdhbWUpO1xuICAgICAgfSkuXG4gICAgICBjYXRjaChjb25zb2xlLmVycm9yKTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgdXBkYXRlR2FtZSA9IGZ1bmN0aW9uIHVwZGF0ZUdhbWUoZ2FtZSkge1xuICAgIGdhbWUudXBkYXRlZF9hdCA9IG5ldyBEYXRlKCk7XG4gICAgdmFyIGFsbF9zdWJtaXR0ZWQgPSBnYW1lLnBsYXllcnMuZXZlcnkoZnVuY3Rpb24gKHBsYXllcikge3JldHVybiBwbGF5ZXIuc3VibWl0dGVkX2F0IHx8IHBsYXllci5naXZlbl91cF9hdDt9KTtcbiAgICB2YXIgdGltZV9kb25lID0gZ2FtZS50b3BpY19pZCAmJiAoZ2FtZS51cGRhdGVkX2F0IC0gZ2FtZS5zdGFydGVkX2F0KSAvIDEwMDAgPiBnYW1lLnRvcGljX3RpbWU7XG4gICAgaWYgKGFsbF9zdWJtaXR0ZWQgfHwgdGltZV9kb25lKSBnYW1lLmZpbmlzaGVkX2F0ID0gZ2FtZS51cGRhdGVkX2F0O1xuICAgIGNvbnNvbGUubG9nKGdhbWUpO1xuICAgIGlvLnRvKGdhbWUucm9vbSkuZW1pdCgnR0FNRV9VUERBVEVEJywgZ2FtZSk7XG4gIH07XG59KTtleHBvcnRzLmRlZmF1bHQgPVxuXG5pbztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9iYWNrZW5kL2lvLmpzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9iYWNrZW5kL2lvLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/backend/io.js\n");

/***/ })

};