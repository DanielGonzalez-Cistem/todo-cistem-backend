//* Importaciones
const { ExceptionError } = require('../handlers');

/**
 * Controla las peticiones entrantes de servicios no encontrados en la aplicación.
 * 
 * @name serviceNotFound
 * @param {*} req - Referencia de la petición entrante.
 * @param {*} res - Referencia para retornar una respuesta.
 * @param {*} next - Función que continua el flujo de la aplicación.
 */
const serviceNotFound = ( req, res, next ) => {
    return next( new ExceptionError('SERVICE_NOT_FOUND', req.url) );
}

module.exports = { serviceNotFound };