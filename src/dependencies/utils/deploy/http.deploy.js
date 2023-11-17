//* Importación de utilidades
const { getNetworks } = require('../networks');

/**
 * Habilita el servidor en HTTP.
 * @param {object} deployConfig - Define la configuración del despligue del servidor.
 * @param {object} deployConfig.env - Define el entorno a precargar.
 * @param {object} deployConfig.port - Define el puerto de despliegue de la aplicación.
 * @param {object} deployConfig.server - Define el servidor a precargar.
 * @returns Inicialización del servidor.
 */
const httpDeploy = ( deployConfig ) => {

    //? Desestructuración de propiedades
    const { env, port, server } = deployConfig;

    return server.listen(port, () => getNetworks({ env, port }));

}

module.exports = { httpDeploy };