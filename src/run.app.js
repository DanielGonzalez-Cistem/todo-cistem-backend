//* Importaciones
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

//* Importación de dependencias
const { allowedOriginsCors } = require('./dependencies');

/**
 * Inicializa los middlewares globales a un enrutador.
 * 
 * @name runApp
 * @param {*} router - Enrutador a precargar.
 * @returns {object} Instancia de Express.  
 */
const runApp = ( router ) => {

    //? Desestructuración de variables de entorno
    const { NODE_ENV } = process.env;

    //? Instancia de servidor de express
    const app = express();

    //? Evaluación de dependencias en desarrollo
    if ( NODE_ENV === 'development' ) {
        app.use( morgan('dev') );
        //NOTE: Aquí se pueden configurar más middlewares...
    }

    app.use( allowedOriginsCors() );
    app.use( helmet() );
    app.use( express.json() );
    app.use( router );

    return app;

}

module.exports = { runApp };