//* Importación de dependencias
const { allowedOriginsCors } = require('./cors');
const httpErrorHanlder = require('./http_error_handler');
const { statusCode } = require('./http_status_code');
const middlewares = require('./middlewares');
const utils = require('./utils');

module.exports = {
    allowedOriginsCors,
    httpErrorHanlder,
    statusCode,
    middlewares,
    utils
}