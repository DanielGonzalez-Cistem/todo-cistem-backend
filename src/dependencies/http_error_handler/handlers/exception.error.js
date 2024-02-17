//* Importaciones
const { repositoryErrors } = require('./repository.errors');

/**
 * Clase para estándarizar errores en la aplicación.
 * 
 * @class
 * @name ExceptionError
 */
class ExceptionError extends Error {

    constructor(typeError, aditionalValue = undefined) {
        super();

        this.typeError = typeError;
        this.aditionalValue = aditionalValue;
    }

    setError () {
        return typeof this.aditionalValue === undefined
            ? repositoryErrors[this.typeError]()
            : repositoryErrors[this.typeError](this.aditionalValue);
    }

}

module.exports = { ExceptionError };