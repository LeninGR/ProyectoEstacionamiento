export class Vehiculo {
    id: number;
    tipoVehiculo: number;
    placaVehiculo: string;
    cilindrajeMoto: string;
    estado: string;
    fechaEntrada: Date;
    fechaSalida: Date;
    tiempoServicio: bigint;
    valorServicio: bigint;
    error: string;
    estadoPendiente: boolean;
}
