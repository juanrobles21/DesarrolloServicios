"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_PARTIDOS = void 0;
exports.SQL_PARTIDOS = {
    TODAS: "SELECT p.id_partido, p.nombre_partido \
    FROM partidos p \
    ORDER BY p.nombre_partido",
    CONFIRMAR: "SELECT COUNT(p.id_partido) AS cantidad \
    FROM partidos p \
    WHERE lower(p.nombre_partido) = lower($1)",
    CREAR: "INSERT INTO partidos(nombre_partido) \
    values($1) RETURNING id_partido"
};
