export const SQL_LIBRO_MOSTRAR = {
    
    TODAS: "SELECT l.id_libro, l.titulo, l.fecha_publicacion, l.codigo, l.isbn, e.nombre \
    FROM libro l \
    INNER JOIN editorial e \
    ON e.id_editorial=l.id_editorial \
    ORDER BY l.id_libro"
}