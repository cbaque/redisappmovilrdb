import { Productos } from './productos';
import { DiasPost } from './horario';
import { Direcciones } from './direccion';

// export interface Reciclador {
//     accion: string;
//     id_user_reciclador?: number;
//     ruc_ci: string;
//     username?: string;
//     email: string;
//     password: string;
//     edad: number;
//     telefono: string;
//     id_sector?: number;
//     direccion: string;
//     asociado: boolean;
//     estado?: boolean;
//     productos: Productos[];
//     dias: DiasPost[];
//     direcciones: Direcciones[];
//     rol: number;
// }

export interface Reciclador {
    accion: string;
    nombre: string;
    apellido: string;
    telefono: string;
    rol: number;
    app?: string;
}

export interface RecicladorPorFecha {
    dia?: number;
    hora?: string;
}

export interface ListaRecicladores {
    id_reciclador: number;
    nombre: string;
    biografia: string;
    ruta_foto: string;
}

export interface DireccionesConsumidor {
    id_direccion_usuario: number;
    direccion: string;
    latitud: string;
    longitud: string;
}

export interface AgendaReciclador {
    id_cabecera: number;
    id_reciclador: number;
    fecha: Date;
    hora: Date;
    nombre: string;
    direccion: string;
    latitud: number;
    longitud: number;
    telefono: string;
    estado: number;
}

export interface HorarioReciclador {
  id_hora: number;
  id_dia: number;
  hora_inicio: string;
  hora_fin: string;
  dia: string;
  valor: number;
}
