export interface Horario {
    index: number;
    horaDesde: string;
    horaHasta: string;
}

export interface DiasPost {
    id_hora: number;
    nombre: string;
    desde: string;
    hasta: string;
    selected: boolean;
}
