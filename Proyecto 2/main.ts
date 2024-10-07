function gestionarVehiculos(vehiculos: Vehiculo[]): void {
    vehiculos.forEach((vehiculo) => {
        vehiculo.acelerar(140);  // Acelerar hasta 140 km/h 
        vehiculo.frenar();      // frena
    });
}

// Crear una lista de vehículos para gestionar
const vehiculos: Vehiculo[] = [
    new Coche("Toyota", "SW4", 180, 4),
    new Moto("Honda", "Wave", 200, "Deportivo")
];

// Ejecutar la función para gestionar los vehículos
gestionarVehiculos(vehiculos);
