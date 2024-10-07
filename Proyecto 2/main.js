// Clase Vehiculo
class Vehiculo {
    constructor(marca, modelo, velocidadMaxima) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadMaxima = velocidadMaxima;
    }

    acelerar(velocidad) {
        console.log(`${this.marca} ${this.modelo} aceleró a ${velocidad} km/h.`);
    }

    frenar() {
        console.log(`${this.marca} ${this.modelo} se detuvo.`);
    }
}

// Clase Coche que hereda de Vehiculo
class Coche extends Vehiculo {
    constructor(marca, modelo, velocidadMaxima, numeroPuertas) {
        super(marca, modelo, velocidadMaxima);
        this.numeroPuertas = numeroPuertas;
    }
}

// Clase Moto que hereda de Vehiculo
class Moto extends Vehiculo {
    constructor(marca, modelo, velocidadMaxima, tipoManillar) {
        super(marca, modelo, velocidadMaxima);
        this.tipoManillar = tipoManillar;
    }
}

// Función para gestionar los vehículos
function gestionarVehiculos(vehiculos) {
    vehiculos.forEach((vehiculo) => {
        vehiculo.acelerar(110);  // Acelerar hasta 140 km/h 
        vehiculo.frenar();      // Frena
    });
}

// Crear una lista de vehículos para gestionar
const vehiculos = [
    new Coche("Toyota", "SW4", 180, 4),
    new Moto("Honda", "Wave", 200, "Deportivo")
];

// Ejecutar la función para gestionar los vehículos
gestionarVehiculos(vehiculos);
