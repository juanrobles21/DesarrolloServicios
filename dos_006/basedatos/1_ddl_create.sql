CREATE TABLE roles(
    cod_rol serial not null,
    nombre_rol VARCHAR(200) not null,
    constraint PK_ROL primary key(cod_rol)
);
ALTER TABLE roles owner to user_node;
CREATE UNIQUE INDEX indice_nombrerol ON roles(nombre_rol);
CREATE TABLE accesos(
    cod_acceso serial not null,
    correo_acceso varchar(200) not null UNIQUE,
    clave_acceso varchar(200) not null,
    cod_rol int4 not null,
    constraint PK_ACCESOS primary key(cod_acceso)
);
ALTER TABLE accesos owner to user_node;

CREATE TABLE materiapensum(
    cod_pensum int4 not null,
    cod_materia int4 not null,
    cod_semestre int4 not null,
    constraint PK_MATERIAPENSUM primary key(cod_pensum, cod_materia)
);
ALTER TABLE materiapensum owner to user_node;


CREATE TABLE materias(
    cod_materia serial not null,
    nombre_materia varchar(200) not null,
    referencia_materia varchar(200) not null,
    constraint PK_MATERIAS primary key(cod_materia)
);
ALTER TABLE materias owner to user_node;


CREATE TABLE semestres(
    cod_semestre serial not null,
    nombre_semestre varchar(200) not null,
    constraint PK_SEMESTRES primary key(cod_semestre)
);
ALTER TABLE semestres owner to user_node;


CREATE TABLE pensums(
    cod_pensum serial not null,
    cod_programa int4 not null,
    nombre_pensum varchar(200) not null,
    constraint PK_PENSUMS primary key(cod_pensum)
);
ALTER TABLE pensums owner to user_node;

CREATE TABLE programas(
    cod_programa serial not null,
    nombre_programa varchar(200) not null,
    constraint PK_PROGRAMAS primary key(cod_programa)
);
ALTER TABLE programas owner to user_node;

CREATE UNIQUE INDEX index_nompro ON programas (nombre_programa);

ALTER TABLE materiapensum
    add constraint FK_MATERIAPEN_REF_MATERIAS foreign key (cod_materia)
    references materias (cod_materia)
    on delete restrict on update cascade;

ALTER TABLE materiapensum
    add constraint FK_MATERIAPEN_REF_SEMESTRES foreign key (cod_semestre)
    references semestres (cod_semestre)
    on delete restrict on update cascade;

ALTER TABLE materiapensum
    add constraint FK_MATERIAPEN_REF_PENSUMS foreign key (cod_pensum)
    references pensums (cod_pensum)
    on delete restrict on update cascade;

ALTER TABLE pensums
    add constraint FK_PENSUMS_REF_PRORGRAMAS foreign key (cod_programa)
    references programas (cod_programa)
    on delete restrict on update cascade;

ALTER TABLE accesos
    add constraint FK_ACCESO_REF_ROLES foreign key (cod_rol)
    references roles (cod_rol)
    on delete restrict on update cascade;