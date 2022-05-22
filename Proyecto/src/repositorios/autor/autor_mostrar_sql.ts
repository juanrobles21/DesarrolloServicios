export const SQL_AUTOR_MOSTRAR = {
    TODAS: "SELECT a.id_autor, a.nombre, a.apellido, a.nacionalidad,a.descripcion \
    FROM autor a \
    ORDER BY a.id_autor"
}