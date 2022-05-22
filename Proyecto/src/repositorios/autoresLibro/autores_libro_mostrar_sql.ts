export const SQL_AUTORES_LIBRO_MOSTRAR = {

    TODAS: "SELECT al.id_autorLibro, a.nombre, a.apellido, l.titulo \
    FROM autores_libro al \
    INNER JOIN autor a \
    ON al.id_autor=a.id_autor \
    INNER JOIN libro l \
    ON al.id_libro=l.id_libro \
    ORDER BY l.id_libro"
}