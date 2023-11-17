//* Importación de dependencias
const { ExceptionError } = require('../errors/exception.error');
const { generateLogs } = require('../../utils');

/**
 * Centraliza los errores que se generán en la aplicación.
 * @param {*} error - Definición del error controlado.
 * @param {*} req - Deinificón de la solicitud realizada.
 * @param {*} res - Definición de la respuesta capturada.
 * @param {*} next - Función que continua el flujo de la aplicación.
 */
const errorCaught = ( error, req, res, next ) => {

    //NOTE: Descomente la siguiente línea 👇🏻 en caso de hacer pruebas.
    // console.log('ERROR_CAUGHT: ', error);

    /**
     * @type {*} Error capturado durante el flujo de la aplicación.
     */
    let errorCaught;

    if ( typeof error.toJSON === 'function' ) {
        //? Si es un error controlado, se obtiene y se asigna.
        errorCaught = error.toJSON();
    } else {
        //? Si es un error desconocido, se obtiene y se retorna como un error 500
        errorCaught = new ExceptionError('INTERNAL_SERVER_ERROR', error.stack).toJSON();
        //? El error desconocido, se almacenará en el directorio de logs.
        generateLogs( error.stack );
    }

    //? Retorno de respuesta del error en JSON
    res.status( errorCaught.status_code );
    res.json( errorCaught );
    res.end();

}

/**
 * Controla las peticiones entrantes de servicios no encontrados en la aplicación.
 * @param {*} req - Deinificón de la solicitud realizada.
 * @param {*} res - Definición de la respuesta capturada.
 * @param {*} next - Función que continua el flujo de la aplicación. 
 */
const serviceNotFound = ( req, res, next ) => next( new ExceptionError('SERVICE_NOT_FOUND', req.url) );

module.exports = {
    errorCaught,
    serviceNotFound
}