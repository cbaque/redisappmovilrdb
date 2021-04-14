export enum accionCatalogo {
    DIA_RECOLECCION = 'TIP_DIAS',
    IDIOMA          = 'TIP_IDIOMA',
    NIVEL_ESTUDIO   = 'TIP_NIVEL_EST',
    ROLES           = 3,
    SECTOR          = 'TIP_SECTOR',
    TIPO_ENVIO      = 'TIP_ENVIO',
    TIPO_PERSONA    = 'TIP_PERSON'
}

export interface Catalogos {
    id?: number;
    nombre?: string;
}