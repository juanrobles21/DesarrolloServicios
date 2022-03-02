CREATE table partidos(
    id_partido serial not null,
    nombre_partido varchar(200) not null,
    constraint PK_PARTIDOS primary key(id_partido)
);
ALTER table partidos owner to user_node;
CREATE TABLE candidatos(
    id_candidato serial not null,
    nombre_candidato varchar(200) not null,
    fechanac_candidato DATE not null,
    eval_candidato numeric(12,2) not null,
    id_partido int4 not null,

    constraint PK_CANDIDATOS primary key(id_candidato)
);
ALTER TABLE candidatos owner to user_node;
ALTER TABLE candidatos
    ADD constraint FK_CAND_PART FOREIGN KEY (id_partido)
    REFERENCES partidos (id_partido)
    on delete restrict on update cascade; 