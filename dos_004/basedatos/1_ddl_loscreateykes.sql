CREATE table facultades (
    cod_facultad serial not null,
    nombre_facultad varchar(200) not null,
    constraint PK_FACULTADES primary key(cod_facultad)
);
ALTER table facultades owner to user_node;
CREATE table tipoDocente(
    cod_tipoDocente serial not null,
    nombre_tipoDocente varchar (200) not null,
    constraint PK_DOCENTES primary key(cod_tipoDocente)
);
ALTER table docentes owner to user_node;
CREATE table docentes(
    cod_docentes serial not null,
    cod_facultad int4 not null,
    documento_docente varchar(200) not null,
    nombre_docente varchar(200) not null,
    apellidos_docentes varchar(200) not null,
    tipo_docente int2 not null
        constraint CK_TIPODOCENTE check(tipo_docente in(1,2,3,4,5,6)),
    constraint PK_DOCENTES primary key(cod_docentes)
);
ALTER table docentes owner to user_node;
ALTER table docentes
    ADD constraint FK_FACU_DOCE FOREIGN KEY (cod_facultad)
    REFERENCES facultades (cod_facultad)
    on delete restrict on update cascade;
ALTER table docentes
    ADD constraint FK_TIPO_DOCENTE FOREIGN key (tipo_docente)
    REFERENCES tipo_docente (cod_tipoDocente)
    on delete restrict on update
