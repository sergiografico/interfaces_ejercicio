import { muebles,desktopPc } from "./modelos";

class oficina implements muebles {
    tipoDeMueble: string;
    descuento: boolean;
    precio: number;
    marca: string;
    envioRapido: string;

    constructor(tipoDeMueble: string, descuento: boolean, precio: number, marca: string, envioRapido: string){
        this.tipoDeMueble = tipoDeMueble;
        this.descuento = descuento;
        this.precio = precio;
        this.envioRapido = envioRapido;
        this.marca= marca;
        this.envioRapido= envioRapido;
    }
    
}