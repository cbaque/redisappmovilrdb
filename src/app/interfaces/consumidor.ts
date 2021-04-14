import { Direcciones } from './direccion';

export interface Consumidor {
    accion: string;
    id_consumidor?: number;
    username?: string;
    nombre?: string;
    email?: string;
    password?: string;
    edad?: number;
    id_tipo_estudio?: number;
    estado?: boolean;
    direcciones: Direcciones[];
    rol: number;
}