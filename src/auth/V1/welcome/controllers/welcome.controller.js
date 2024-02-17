/**
 * Función de inyección de dependencias para el controlador.
 * 
 * @typedef {object} HttpStatusCode
 * @property {string} OK - Código de respuesta HTTP.
 * 
 * @param {object} dependencies - Lista de dependencias de la aplicación. 
 * @param {HttpStatusCode} dependencies.statusCode - Lista de dependencias de la aplicación. 
 * @returns {Function} welcomeController
 */
module.exports = ( dependencies ) => {

    //? Desestructuración de dependencias 
     const { statusCode } = dependencies;
 
     /**
      * Controlador que emite una prueba de conexión en el entorno AUTH.
      * 
      * Un controlador se encarga de realizar **4 responsabilidades**:
      * 1. Recibe la petición entrante del cliente.
      * 2. Normaliza el información recibida (en caso de que se reciban datos).
      * 3. Enviar la información recibida a un ***Servicio***.
      * 4. Retornar una respuesta al cliente (ya sea un error o un éxito).
      * 
      * @name welcomeController
      * @param {*} req - Referencia de la petición entrante.
      * @param {*} res - Referencia para retornar una respuesta.
      * @param {*} next - Función que continua el flujo de la aplicación.
      */
     const welcomeController = async (req, res, next) => {
         
        try {
            
            res.status(statusCode.OK);
            res.json({
                message: '¡Bienvenido a REST API TODO Cistem! :D',
                server: 'auth'
            });
            res.end();
            
        } catch (error) {
            // console.log('❌ WELCOME_CONTROLLER_ERROR: ', errorController);
            next(errorController);
        }
 
     }    
 
     return welcomeController;
 
 }