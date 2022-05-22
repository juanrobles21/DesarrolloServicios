export const SQL_EDITORIAL_MOSTRAR = {
    TODAS: "SELECT e.id_editorial, e.nombre, e.pais, e.telefono \
    FROM editorial e \
    ORDER BY e.id_editorial"
}