module.exports = ( dependencies ) => {

    //? Desestructuración de dependencias
    const { statusCode, httpResponses } = dependencies;

    const welcomeController = async ( req, res, next ) => {

        try {

            httpResponses.responseSuccess(res, {
                status_code: statusCode.OK,
                data: {
                    message: 'Bienvenido al Portal de Facturación Backend :D',
                    server: 'app'
                }
            });

        } catch (error) {
            // console.log('❌ WELCOME_CONTROLLER_ERROR: ', error);
            next( error );
        }

    }

    return welcomeController;

}