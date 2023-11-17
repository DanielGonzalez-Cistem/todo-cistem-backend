//* Configuración de variables de entorno
require('dotenv').config();

//* Importación de dependencias
const dependencies = require('./src/dependencies');

//* Importación del núcleo de enrutadores
const { runApp } = require('./src/run.app');

//* Importación de enrutadores principales
const { appRouter } = require('./src/app/main.routes');
const { authRouter } = require('./src/auth/main.routes');

//? Desestrucutración de variables de entorno
const { NODE_ENV, VERSION, APP_PORT, AUTH_PORT, HTTPS } = process.env;

//? Desestructuración de dependencias
const { utils } = dependencies;

//? Inicialización de servidores
const AppServer = runApp( appRouter );
const AuthServer = runApp( authRouter );

if ( NODE_ENV === 'prod' && Boolean( HTTPS ) ) {

    console.log('✅ Desplegando servidor HTTPS...');

    utils.deploys.httpsDeploy({
        env: 'APP',
        port: APP_PORT,
        server: AppServer
    });

    utils.deploys.httpsDeploy({
        env: 'AUTH',
        port: AUTH_PORT,
        server: AuthServer
    });

} else {

    console.log('✅ Desplegando servidor HTTP...');

    utils.deploys.httpDeploy({
        env: 'APP',
        port: APP_PORT,
        server: AppServer
    });

    utils.deploys.httpDeploy({
        env: 'AUTH',
        port: AUTH_PORT,
        server: AuthServer
    });

}

console.log(`✨ [Nombre Proyecto] v${ VERSION } inicializado...\n`);