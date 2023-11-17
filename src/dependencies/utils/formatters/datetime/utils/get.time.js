/**
 * Obtiene la hora formateada en 'AM' o 'PM' a partir de una fecha asignada.
 * @param {date|string} date - Fecha y hora a convertir.
 * @returns Formato de hora.
 */
const getTime = ( date ) => {

    /**
     * @type {string} Indicador de tiempo <AM|PM>.
     */
    let timeIndicator = 'AM';

    /**
     * @type {date} Extracción de la hora.
     */
    let hours = date.getHours().toString().padStart(2, '0');

    /**
     * @type {date} Extracción de los minutos.
     */
    const minutes = date.getMinutes().toString().padStart(2, '0');

    /**
     * @type {date} Extracción de los segundos.
     */
    const seconds = date.getSeconds().toString().padStart(2, '0');

    if ( hours >= 12 ) {
        timeIndicator = 'PM';
        if( hours > 12 ) { hours -= 12; }
    }

    return `${ hours }:${ minutes }:${ seconds } ${ timeIndicator }`; // 10:28:15 AM

}

module.exports = { getTime };