export const SQL_SEMESTRES_CREAR = {
    CONFIRMAR: "SELECT COUNT(s.cod_semestre) AS cantidad \
    FROM  semestres s \
    WHERE lower(s.nombre_semestre) = lower($1)",

    CREAR: "INSERT INTO semestres(nombre_semestre) \
    values($1) RETURNING cod_semestre"
}