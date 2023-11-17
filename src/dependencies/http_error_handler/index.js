//* Importaciópn de errores
const { ExceptionError } = require('./errors/exception.error');
const { errorCaught, serviceNotFound } = require('./handlers');

module.exports = {
    errorCaught,
    ExceptionError,
    serviceNotFound
}