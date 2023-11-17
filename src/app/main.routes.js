//* Importaciones globales
const { Router } = require('express');

//* Importación de dependencias
const dependencies = require('../dependencies');

//* Importación de enrutadores
const { welcomeRouter } = require('./V1/routers');

//? Desestructuración de dependencias
const { httpError } = dependencies;

/**
 * @type {Express} Enrutador principal del ambiente 'app'.
 */
const appRouter = Router();

/**
 * @type {string} URL base para la construcción del servicio.
 */
const PATH_URL = '/api/v1/app';

//* Servicios del servidor APP
appRouter.use(`${ PATH_URL }`, welcomeRouter(dependencies));

//* Manejador de errores
appRouter.use( httpError.serviceNotFound );
appRouter.use( httpError.errorCaught );

module.exports = { appRouter };