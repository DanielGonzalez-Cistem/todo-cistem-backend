//* Importaciones
const { statusCode } = require('../../http_status_code');

/**
 * @constant {object} Catálogo de errores.
 */
const repositoryErrors = {
    INTERNAL_SERVER_ERROR: ( stack ) => {
        return {
            success: false,
            status_code: statusCode.INTERNAL_SERVER_ERROR,
            error: {
                code: 'B01',
                message: 'Opp... estamos experimentando problemas en el servidor, estamos trabajando en ello',
                stack_error: stack
            }
        }
    },
    SERVICE_NOT_FOUND: ( url ) => {
        return {
            success: false,
            status_code: statusCode.NOT_FOUND,
            error: {
                code: 'B02',
                message: `El servicio '${ url }' que intenta consultar no esta disponible`
            }
        }
    },
    VALIDATE_ERROR: ( error ) => {
        return {
            success: false,
            status_code: statusCode.BAD_REQUEST,
            error: {
                code: 'B03',
                message: error
            }
        }
    },
    EMAIL_EXIST: ( email ) => {
        return {
            success: false,
            status_code: statusCode.CONFLICT,
            error: {
                code: 'B04',
                message: `El correo '${ email }' ya ha sido registrado`
            }
        }
    },
    PHONE_NUMBER_EXIST: ( phoneNumber ) => {
        return {
            success: false,
            status_code: statusCode.CONFLICT,
            error: {
                code: 'B05',
                message: `El número '${ phoneNumber }' ya ha sido registrado`
            }
        }
    },
    NOT_USER_EXIST: () => {
        return {
            success: false,
            status_code: statusCode.CONFLICT,
            error: {
                code: 'B06',
                message: `El usuario que intenta consultar no existe`
            }
        }
    },
    EXPIRED_TOKEN: () => {
        return {
            success: false,
            status_code: statusCode.UNAUTHORIZED,
            error: {
                code: 'B07',
                message: `El token proporcionado ha expirado`
            }
        }
    },
    INVALID_TOKEN: () => {
        return {
            success: false,
            status_code: statusCode.UNAUTHORIZED,
            error: {
                code: 'B08',
                message: `El token proporcionado no es válido`
            }
        }
    },
    LOGIN_FAILED: () => {
        return {
            success: false,
            status_code: statusCode.UNAUTHORIZED,
            error: {
                code: 'B09',
                message: `Inicio de sesión no válido`
            }
        }
    },
    MISSING_BEARER_TOKEN: () => {
        return {
            success: false,
            status_code: statusCode.UNAUTHORIZED,
            error: {
                code: 'B10',
                message: 'Ausencia de credenciales para procesar la petición'
            }
        }
    },
    USER_NOT_VERIFIED: () => {
        return {
            success: false,
            status_code: statusCode.CONFLICT,
            error: {
                code: 'B11',
                message: 'El usuario que intenta consulta no esta verificado'
            }
        }
    },
}

module.exports = { repositoryErrors };