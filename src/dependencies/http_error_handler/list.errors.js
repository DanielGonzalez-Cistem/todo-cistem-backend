//* Importación de dependencias
const { responseError, responseErrorWithStack, responseOK } = require('../http_responses');
const { statusCode } = require('../http_status_code');

/**
 * @constant Catálogo de errores de la aplicación.
 */
const listErrors = {
    INTERNAL_SERVER_ERROR( stack ) {
        return responseErrorWithStack(stack, {
            code: 'B01',
            message: 'Opps, estamos experimentando problemas en servidor, intente de nuevo más tarde',
            status_code: statusCode.INTERNAL_SERVER_ERROR
        });
    },
    SERVICE_NOT_FOUND( url ) {
        return responseError({
            code: 'B02',
            message: `El servicio '${ url }' que intenta llamar no esta disponible`,
            status_code: statusCode.NOT_FOUND
        });
    },
    VALIDATE_ERROR( error ) {
        return responseError({
            code: 'B03',
            message: error,
            status_code: statusCode.BAD_REQUEST
        });
    },
}

module.exports = { listErrors };