export const SQL_AUTOR_CREAR = {
    
    CREAR: "INSERT INTO autor(nombre,apellido,nacionalidad,descripcion) \
    values($1,$2,$3,$4) RETURNING id_autor"

}