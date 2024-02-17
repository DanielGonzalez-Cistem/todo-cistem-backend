//* Importaciópn de errores
const { ExceptionError } = require('./handlers');
const { errorCaught, serviceNotFound } = require('./errors');

module.exports = {
    errorCaught,
    ExceptionError,
    serviceNotFound
}