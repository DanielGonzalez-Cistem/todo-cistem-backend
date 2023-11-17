//* Importaciones globales
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

//* Importación de dependencias
const { allowedOriginsCORS } = require('./dependencies');

const runApp = ( router ) => {

    const { NODE_ENV } = process.env;

    /**
     * @type {Express} Instancia de aplicación Express.
     */
    const app = express();

    if ( NODE_ENV === 'dev' ) {
        app.use( morgan('dev') );
        //NOTE: Aquí se pueden configurar más middlewares...
    }

    app.use( allowedOriginsCORS() );
    app.use( helmet() );
    app.use( express.json() );
    app.use( router );

    return app;

}

module.exports = { runApp };