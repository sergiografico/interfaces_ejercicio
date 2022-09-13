//interface 1

export interface moto{
marca: string;
referencia: string;
modelo: number;
cilindraje: number;
moficada: boolean;
tipo: string;
}

//export interface 2

export interface celular{
marca: string;
referencia: string;
valor: number;
memoria: number;
camara: boolean;
camaraPosterior: boolean;
ram: string;
}


//interface 3

export interface celular{
marca: string;
referencia: string;
valor: number;
memoria: number;
camara: boolean;
camaraPosterior: boolean;
ram: string;
}

//interface 4

export interface oficina{
envioRapido: boolean;
descuento: boolean;
marca: string;
procesador: string;
ram: string;
discoSsd:boolean;
tamanoPantalla: string;
tarjetaVIdeo?: boolean;
}
    
//interface 5

export interface desktopPc{
    envioRapido: boolean;
    descuento: boolean;
    marca: string;
    procesador: string;
    ram: string;
    discoSsd:boolean;
    tamanoPantalla: string;
    tarjetaVIdeo?: boolean;
    }
        

//interface 5

export interface muebles{
    tipoDeMueble: string;
    descuento: boolean;
    precio: number;
    marca: string;
    envioRapido: string;
    }


//interface 6

export interface chaqueta{
    cuero: boolean;
    color: boolean;
    marca: string;
    largoDeMangas: string;
    precio: number;
    talla: string;
    mujer: boolean;
    hombre: boolean;
    }

    
//interface 7

export interface mascota{
    tipoDemascota: string;
    edad: number;
    peso: number;
    tamaño: string;
    vacunado: boolean;
    rescatado: boolean;
    raza: string;
    color: string;
    }