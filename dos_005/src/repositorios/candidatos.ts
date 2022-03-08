export const SQL_CANDIDATOS={
    TODAS:"SELECT c.id_candidato, c.nombre_candidato, c.fechanac_candidato, c.eval_candidato, p.nombre_partido \
    FROM candidatos c \
    INNER JOIN partidos p \
    ON p.id_partido = c.id_partido",
/*
    CONFIRMAR: "SELECT COUNT(c.id_partido) AS cantidad \
    FROM candidatos c \
    INNER JOIN partidos p \
    ON p.id_partido = c.id_partido \
    WHERE p.id_partido = ($4)",
*/
    CONFIRMAR: "SELECT COUNT(p.id_partido) AS cantidad \
    FROM partidos p \
    WHERE p.id_partido= ($4)",

    CREAR:"INSERT INTO candidatos(nombre_candidato,fechanac_candidato,eval_candidato,id_partido) \
    values($1,$2,$3,$4) RETURNING id_candidato "

}