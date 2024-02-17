//* Importaciones globales
const { Router } = require('express');
const dependencies = require('../dependencies');

//* Importación de enrutadores
const welcomeRouter = require('./V1/welcome/router');

//? Desestructuración de dependencias
const { httpErrorHanlder } = dependencies;

//? Enrutador principal del ambiente APP
const appRouter = Router();

/**
 * @type {string} URL base para la construcción del servicio.
 */
const PATH_URL = '/api/v1/app';

//* Servicios del servidor APP
appRouter.use(`${ PATH_URL }`, welcomeRouter(dependencies));

//* Manejador de errores
appRouter.use( httpErrorHanlder.serviceNotFound );
appRouter.use( httpErrorHanlder.errorCaught );

module.exports = { appRouter };