CREATE TABLE roles(
    cod_rol serial not null,
    nombre_rol VARCHAR(200) not null,
    estado_rol int2 not null,
    constraint PK_ROL primary key(cod_rol)
);
ALTER TABLE roles owner to user_node;
CREATE UNIQUE INDEX indice_nombrerol ON roles(nombre_rol);

CREATE TABLE usuarios(
    cod_usuario serial not null,
    cod_rol int4 not null,
    documetno_usuario VARCHAR(50) not null,
    tipodocumento_usuario int2 not null,
    nombres_usuario VARCHAR(60) not null,
    apellidos_usuario VARCHAR(80) not null,
    telefono_usuario VARCHAR(50) not null,
    estado_usuario int2 not null,
    constraint PK_USUARIOS primary key(cod_usuario)
);
ALTER TABLE usuarios owner to user_node;

CREATE TABLE accesos(
    cod_usuario int4 not null,
    correo_acceso varchar(200) not null,
    clave_acceso varchar(200) not null,
    constraint PK_ACCESOS primary key(cod_usuario)
);
ALTER TABLE accesos owner to user_node;
CREATE UNIQUE INDEX indice_correo ON accesos(correo_acceso);

CREATE TABLE ingresos(
    cod_ingreso serial not null,
    cod_usuario int4 not null,
    fecha_ingreso date not null,
    hora_ingreso time not null,
    constraint PK_INGRESOS primary key(cod_ingreso)
);
ALTER TABLE ingresos owner to user_node;

CREATE TABLE imagenes(
    cod_imagen serial not null,
    cod_usuario int4 not null,
    nombrepublico_imagen VARCHAR(200) not null,
    nombreprivado_imagen VARCHAR(200) not null,
    tipo_imagen VARCHAR(50) not null,
    tamano_imagen VARCHAR(50) not null,
    favorita_imagen int2 not null,
    constraint PK_IMAGENES primary key(cod_imagen)
);
ALTER TABLE imagenes owner to user_node;

CREATE TABLE alertas(
    cod_alerta serial not null,
    cod_usuario int4 not null,
    dias_alerta int2 not null,
    meses_alerta int2 not null,
    titulo_alerta VARCHAR(500) not null,
    detalle_alerta text not null,
    estado_alerta int2 not null,
    fecha_alerta date not null,
    constraint PK_ALERTAS primary key(cod_alerta)
);
ALTER TABLE alertas owner to user_node;

ALTER TABLE alertas
    add constraint FK_ALERTAS_REF_USUARIOS foreign key (cod_usuario)
    references usuarios(cod_usuario)
    on delete restrict on update cascade;

ALTER TABLE imagenes
    add constraint FK_IMAGENES_REF_USUARIOS foreign key (cod_usuario)
    references usuarios(cod_usuario)
    on delete restrict on update cascade;

ALTER TABLE ingresos
    add constraint FK_INGRESOS_REF_ACCESOS foreign key (cod_usuario)
    references accesos(cod_usuario)
    on delete restrict on update cascade;

ALTER TABLE accesos
    add constraint FK_ACCESOS_REF_USUARIOS foreign key (cod_usuario)
    references usuarios(cod_usuario)
    on delete restrict on update cascade;

ALTER TABLE usuarios
    add constraint FK_USUARIOS_REF_ROLES foreign key (cod_rol)
    references roles(cod_rol)
    on delete restrict on update cascade;