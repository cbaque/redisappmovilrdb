export interface Productos {
    id_producto: number;
    id_patrocionador: number;
    descripcion: string;
    direccion_logo: string;
    estado: number;
    selected: boolean;
}

export interface ProductoCantidad {
    index: number;
    cantidad: number;
}