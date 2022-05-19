export const soloContieneLetrasAndEspacios = (str: string) => {
    return str.match(/[^a-z\s]/igm) == null ? true : false;
}

export const eliminarSpaceAlInicioAndFinalDeString = (str: string) => {
    return str.replace(/^[\s]+|[\s]+$/igm, '');
}