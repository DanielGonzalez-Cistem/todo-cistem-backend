//* Importaciones
const { Router } = require('express');

const { welcomeController } = require('./controllers');

/**
 * Función de inyección de dependencias para el enrutador.
 * 
 * @param {object} dependencies - Lista de dependencias de la aplicación. 
 * @returns {Function} welcomeRouter
 */
module.exports = ( dependencies ) => {

    /**
     * @type {Router} Enrutador que coordina los servicios de bienvenida.
     */
    const welcomeRouter = Router();

    //* --> Definición de Rutas

    //? Servicio para Conexión de Prueba en App
    welcomeRouter.get('/', welcomeController(dependencies));

    return welcomeRouter;

}