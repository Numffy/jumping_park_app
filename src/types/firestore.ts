export interface Usuario {
  tipo_doc: string;
  numero_doc: string;
  nombres: string;
  apellidos: string;
  telefono?: string;
  correo?: string;
  rol?: 'responsable' | 'admin' | string;
  fecha_registro?: any; 
}

export interface Menor {
  nombre: string;
  apellido: string;
  fecha_nacimiento: string | any;
  tipo_doc?: string;
  numero_doc?: string;
  eps?: string;
  registrado_por?: string; 
  creado_en?: any;
}

export interface Consentimiento {
  numero_unico: string;
  fecha: string | any;
  responsable: Usuario & { id: string };
  menores: Array<Partial<Menor> & { id?: string }>;
  firma_responsable_url?: string;
  aceptaciones: {
    uso_imagen: boolean;
    tratamiento_datos: boolean;
  };
  creado_en?: any;
}

export interface Servicio {
  nombre: string;
  codigo: string;
  precio: number;
  estado: boolean;
}

export interface Factura {
  numero_factura: string;
  fecha: any;
  id_usuario: string;
  total: number;
}

export interface VentaItem {
  servicio_id: string;
  nombre: string;
  cantidad: number;
  precio_unitario: number;
  subtotal: number;
}

export interface Venta {
  id_factura?: string;
  id_consentimiento?: string;
  responsable_id?: string;
  fecha?: any;
  total: number;
  items: VentaItem[];
}

export interface Otp {
  cedula_ingresada: string;
  codigo_otp: string;
  id_usuario?: string;
  fue_validado?: boolean;
  fecha_envio?: any;
  fecha_validado?: any;
}

export interface Acceso {
  qr_hash: string;
  cedula_ingresada: string;
  id_usuario_resultado?: string;
  fecha?: any;
}
