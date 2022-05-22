CREATE TABLE cliente(
    id_cliente serial not null,
    identificacion VARCHAR(50) not null,
    nombre VARCHAR(200) not null,
    apellido VARCHAR(200) not null,
    direccion VARCHAR(50) not null,
    telefono VARCHAR(20) not null,
    constraint PK_CLIENTE primary key(id_cliente)
);

ALTER TABLE
    cliente owner to user_node;

CREATE TABLE editorial(
    id_editorial serial not null,
    nombre VARCHAR(200) not null,
    pais VARCHAR(30) not null,
    telefono VARCHAR(20) not null,
    constraint PK_EDITORIAL primary key(id_editorial)
);

ALTER TABLE
    editorial owner to user_node;

CREATE TABLE autor(
    id_autor serial not null,
    nombre VARCHAR(200) not null,
    apellido VARCHAR(200) not null,
    nacionalidad VARCHAR(200) not null,
    descripcion VARCHAR(200) not null,
    constraint PK_AUTOR primary key(id_autor)
);

ALTER TABLE
    autor owner to user_node;

CREATE TABLE prestamos(
    id_prestamo serial not null,
    fecha_inicio date not null,
    descripcion VARCHAR(200) not null,
    id_cliente int4 not null,
    constraint PK_PRESTAMOS primary key(id_prestamo)
);

ALTER TABLE
    prestamos owner to user_node;

CREATE TABLE libro(
    id_libro serial not null,
    titulo VARCHAR(200) not null,
    fecha_publicacion date not null,
    codigo int not null,
    isbn VARCHAR(10) not null,
    id_editorial int4 not null,
    constraint PK_LIBRO primary key(id_libro)
);

ALTER TABLE
    libro owner to user_node;

CREATE TABLE autores_libro(
    id_autorlibro serial not null,
    id_autor int4 not null,
    id_libro int4 not null,
    constraint PK_AUTORES_LIBRO primary key(id_autorlibro)
);

ALTER TABLE
    autores_libro owner to user_node;

CREATE TABLE detalle_prestamos(
    id_detalleprestamo serial not null,
    id_prestamo int4 not null,
    id_libro int4 not null,
    fecha_devolucion date not null,
    dias_mora int not null,
    descripcion VARCHAR(200) not null,
    fecha_entrega date not null,
    constraint PK_DETALLE_PRESTAMOS primary key(id_detalleprestamo)
);

ALTER TABLE
    detalle_prestamos owner to user_node;

ALTER TABLE prestamos
    add constraint FK_PRESTAMOS_REF_CLIENTE foreign key (id_cliente)
    references cliente(id_cliente)
    on delete restrict on update cascade;

ALTER TABLE libro
    add constraint FK_LIBRO_REF_EDITORIAL foreign key (id_editorial)
    references editorial(id_editorial)
    on delete restrict on update cascade;

ALTER TABLE autores_libro
    add constraint FK_AUTORES_LIBRO_REF_AUTOR foreign key (id_autor)
    references autor(id_autor)
    on delete restrict on update cascade;

ALTER TABLE autores_libro
    add constraint FK_AUTORES_LIBRO_REF_LIBRO foreign key (id_libro)
    references libro(id_libro)
    on delete restrict on update cascade;

ALTER TABLE detalle_prestamos
    add constraint FK_DETALLE_PRESTANIS_REF_PRESTAMOS foreign key (id_prestamo)
    references prestamos(id_prestamo)
    on delete restrict on update cascade;

ALTER TABLE detalle_prestamos
    add constraint FK_DETALLE_PRESTANIS_REF_LIBRO foreign key (id_libro)
    references libro(id_libro)
    on delete restrict on update cascade;