import { Time } from '@angular/common';
import { Productos } from './productos';

export interface Transaccion {
    accion: string;
    cabecera?: number;
    reciclador: number;
    tipo_envio: boolean;
    total?: number;
    fecha: Date;
    hora: Time;
    estado?: boolean;
    productos: Productos[];
    direccion: number;
    fotos: [];
}