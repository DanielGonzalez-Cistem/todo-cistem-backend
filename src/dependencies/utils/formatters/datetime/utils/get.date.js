/**
 * Obtiene el día, mes y año a partir de una fecha establecida.
 * @param {date|string} date - Fecha a seccionar por día, mes y año.
 * @returns Fecha segmentada en día, mes y año.
 */
const getDate = ( date ) => {

    const day   = date.getDate().toString().padStart(2, '0'); // 01, 02, 03, 04 .....
    const month = (date.getMonth() + 1).toString().padStart(2, '0') // 01, 02, 03, 04 .....
    const year  = date.getFullYear();

    return `${ day }-${ month }-${ year }`;

}

module.exports = { getDate };