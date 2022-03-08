INSERT INTO programas(nombre_programa)
values('Ingenieria Sistemas');

INSERT INTO programas(nombre_programa)
values('Ingenieria Civil');

INSERT INTO programas(nombre_programa)
values('Ingenieria Ambiental');

INSERT INTO pensums(cod_programa,nombre_pensum)
values(1,'2017/2');

INSERT INTO pensums(cod_programa,nombre_pensum)
values(2,'2009/1');

INSERT INTO pensums(cod_programa,nombre_pensum)
values(3,'2021/3');

INSERT INTO semestres(nombre_semestre)
values('Quinto');


INSERT INTO semestres(nombre_semestre)
values('Sexto');


INSERT INTO semestres(nombre_semestre)
values('Primero');

INSERT INTO materias(nombre_materia,referencia_materia)
values('Desarrollo Servicios','2516');

INSERT INTO materias(nombre_materia,referencia_materia)
values('Calculo Integral','5421');

INSERT INTO materias(nombre_materia,referencia_materia)
values('Optimización','2564');

INSERT INTO materiapensum(cod_pensum,cod_materia,cod_semestre)
values(1,2,3);

INSERT INTO materiapensum(cod_pensum,cod_materia,cod_semestre)
values(1,1,2);

INSERT INTO materiapensum(cod_pensum,cod_materia,cod_semestre)
values(2,2,2);


