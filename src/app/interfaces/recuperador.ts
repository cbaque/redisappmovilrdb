import { Productos } from './productos';
import { DiasPost } from './horario';
import { Direcciones } from './direccion';

// export interface Recuperador {
//     accion: string;
//     id_recuperador?: number;
//     ruc_ci: string;
//     username: string;
//     id_tipo_persona: number;
//     email: string;
//     password: string;
//     telefono: string;
//     // id_sector?: number;
//     direccion: string;
//     asociado: boolean;
//     estado?: boolean;
//     productos: Productos[];
//     dias: DiasPost[];
//     direcciones: Direcciones[];
//     rol: number;
// }

export interface Recuperador {
    accion: string;
    nombre: string;
    apellido: string;
    telefono: string;
    rol: number;    
}