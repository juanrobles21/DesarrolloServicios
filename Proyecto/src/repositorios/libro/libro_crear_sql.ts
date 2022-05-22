export const SQL_LIBRO_CREAR = {

    CONFIRMAR: "SELECT COUNT(l.id_libro) AS cantidad \
    FROM libro l \
    WHERE lower(l.titulo)=lower($1)",

    CONFIRMAREDITORIAL: "SELECT COUNT(e.id_editorial) AS cantidad \
    FROM editorial e \
    WHERE e.id_editorial=$5",

    CREAR: "INSERT INTO libro(titulo,fecha_publicacion,codigo,isbn,id_editorial) \
    values($1,$2,$3,$4,$5) RETURNING id_libro"

}