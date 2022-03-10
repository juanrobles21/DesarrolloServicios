export const SQL_MATERIAPENSUM={
    TODAS:"SELECT pr.nombre_programa,pe.nombre_pensum,ma.nombre_materia,se.nombre_semestre \
    FROM materiapensum mp \
    INNER JOIN pensums pe \
    ON pe.cod_pensum = mp.cod_pensum \
    RIGHT JOIN programas pr \
    ON pr.cod_programa = pe.cod_programa \
    INNER JOIN materias ma \
    ON ma.cod_materia = mp.cod_materia \
    INNER JOIN semestres se \
    ON se.cod_semestre = mp.cod_semestre"
}