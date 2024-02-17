//* Importaciones
const { ExceptionError, generateLogs } = require('../handlers');

/**
 * Centraliza los errores que se generán en la aplicación.
 * 
 * @name errorCaught
 * @param {*} error - Definición del error controlado.
 * @param {*} req - Referencia de la petición entrante.
 * @param {*} res - Referencia para retornar una respuesta.
 * @param {*} next - Función que continua el flujo de la aplicación.
 */
const errorCaught = ( error, req, res, next ) => {

    /**
     * @typedef {object} SchemeError Definición del esquema de la propiedad error en catálogo de errores.
     * @property {string} code - Código de error.
     * @property {string} message - Descripión del error.
     * @property {string} stack_error - Error más detallado por parte de Node.
     * 
     * @typedef {object} ResponseRepositoryError Definición de la respuesta del catálogo de errores.
     * @property {boolean} success - Define el estado de la petición.
     * @property {number} status_code - Define el código de respuesta HTTP.
     * @property {SchemeError} error - Define el error obtenido.
     */

    /**
     * @type {ResponseRepositoryError} Error capturado durante el flujo de la aplicación.
     */
    let errorCaught;

    if ( typeof error.setError === 'function' ) {
        //? Si es un error controlado, se obtiene y se asigna
        errorCaught = error.setError();
    } else {
        //? Si es un error desconocido, se obtiene y se retorna como un error 500
        errorCaught = new ExceptionError('INTERNAL_SERVER_ERROR', error.stack).setError();
        //? Registro del error desconocido
        generateLogs( error.stack );
    }

    //? Retorno de respuesta del error en JSON
    res.status( errorCaught.status_code );
    res.json( errorCaught );
    res.end();

}   

module.exports = { errorCaught };