//* Importaciones globales
const { Router } = require('express');

//* Importación de dependencias
const dependencies = require('../dependencies');

//* Importación de enrutadores
const { welcomeRouter } = require('./V1/routers');

//? Desestructuración de dependencias
const { httpError } = dependencies;

/**
 * @type {Express} Enrutador principal del ambiente 'auth'.
 */
const authRouter = Router();

/**
 * @type {string} URL base para la construcción del servicio.
 */
const PATH_URL = '/api/v1/auth';

//* Servicios del servidor AUTH
authRouter.use(`${ PATH_URL }`, welcomeRouter(dependencies));

//* Manejador de errores
authRouter.use( httpError.serviceNotFound );
authRouter.use( httpError.errorCaught );

module.exports = { authRouter };