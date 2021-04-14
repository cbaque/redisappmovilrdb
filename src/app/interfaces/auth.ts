export interface Data {
    data: any;
    message: string;
    path: string;
    status: number;
    timestamp: string;
}

export interface Respuesta {
    _mensaje: string;
    _error: number;
}

export interface Sociales {
    id?: number;
    name?: string;
    email: string;
    first_name?: string;
    picture_large?: any;
    password?: string;
    user?: string;
}