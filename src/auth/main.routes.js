//* Importaciones globales
const { Router } = require('express');
const dependencies = require('../dependencies');

//* Importación de enrutadores
const welcomeRouter = require('./V1/welcome/router');

//? Desestructuración de dependencias
const { httpErrorHanlder } = dependencies;

//? Enrutador principal del ambiente AUTH
const authRouter = Router();

/**
 * @type {string} URL base para la construcción del servicio.
 */
const PATH_URL = '/api/v1/auth';

//* Servicios del servidor AUTH
authRouter.use(`${ PATH_URL }`, welcomeRouter(dependencies));

//* Manejador de errores
authRouter.use( httpErrorHanlder.serviceNotFound );
authRouter.use( httpErrorHanlder.errorCaught );

module.exports = { authRouter };