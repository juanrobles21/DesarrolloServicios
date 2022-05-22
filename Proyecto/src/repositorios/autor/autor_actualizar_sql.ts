export const SQL_AUTOR_ACTUALIZAR = {

    ACTUALIZAR: "UPDATE autor SET nombre=$1 ,apellido=$2 ,nacionalidad=$3,descripcion=$4 \
    WHERE id_autor=$5 \
    RETURNING id_autor"
}