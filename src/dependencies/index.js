//* Importación de dependencias
const { allowedOriginsCORS } = require('./cors');
const httpError = require('./http_error_handler');
const httpResponses = require('./http_responses');
const { statusCode } = require('./http_status_code');
const middlewares = require('./middlewares');
const utils = require('./utils');

module.exports = {
    allowedOriginsCORS,
    httpError,
    httpResponses,
    statusCode,
    middlewares,
    utils
}