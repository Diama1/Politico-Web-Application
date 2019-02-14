'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _parties = require('./server/routes/parties');

var _parties2 = _interopRequireDefault(_parties);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());
app.use('/parties', _parties2.default);
app.use('/offices', _parties2.default);

var port = process.env.port || 8000;

port.listen(port, function () {
    console.log('You are on port ${port}.');
});

module.exports = app;