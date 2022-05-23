export const SQL_EDITORIAL_CARGAR = {
    CARGAR: "SELECT e.id_editorial, e.nombre, e.pais, e.telefono, l.titulo \
    FROM editorial e \
    INNER JOIN libro l \
    ON l.id_editorial = e.id_editorial \
    WHERE l.id_libro=$1"
}