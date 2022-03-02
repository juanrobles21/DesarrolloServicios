export const SQL_CANDIDATOS={
    TODAS:"SELECT c.id_candidato, c.nombre_candidato, c.fechanac_candidato, c.eval_candidato, p.nombre_partido \
    FROM candidatos c \
    INNER JOIN partidos p \
    ON p.id_partido = c.id_partido"
}