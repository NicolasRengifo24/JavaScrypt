class Ciudad {
    constructor(nombre, cantidadAfiches, tiendas, referenciaGruesa, referenciaDelgada) {
        this.nombre = nombre;
        this.cantidadAfiches = cantidadAfiches;
        this.tiendas = tiendas;
        this.referenciaGruesa = referenciaGruesa;
        this.referenciaDelgada = referenciaDelgada;
    }

    // Método para calcular las cajas necesarias por referencia
    calcularCajasPorReferencia() {
        const maxCajasGruesa = 200; // 200 afiches por caja de referencia gruesa
        const maxCajasDelgada = 400; // 400 afiches por caja de referencia delgada
        const maxMixtas = 300; // Mixtas tienen 300 unidades máximo

        // Cajas por cada referencia
        let cajasGruesa = Math.ceil(this.referenciaGruesa / maxCajasGruesa);
        let cajasDelgada = Math.ceil(this.referenciaDelgada / maxCajasDelgada);
        let totalMixto = Math.min(this.referenciaGruesa, this.referenciaDelgada);
        let cajasMixtas = Math.ceil(totalMixto / maxMixtas);

        // Retorna el cálculo de cajas
        return {
            cajasGruesa,
            cajasDelgada,
            cajasMixtas
        };
    }
}

class DistribucionAfiches {
    constructor() {
        this.ciudades = [];
    }

    // Método para agregar ciudades y sus datos
    agregarCiudad() {
        const cantidadCiudades = parseInt(prompt("Ingrese la cantidad de ciudades:"));

        for (let i = 0; i < cantidadCiudades; i++) {
            let nombreCiudad = prompt(`Ingrese el nombre de la ciudad ${i + 1}:`);
            let cantidadAfiches = parseInt(prompt(`Ingrese la cantidad total de afiches para ${nombreCiudad}:`));
            let cantidadTiendas = parseInt(prompt(`Ingrese la cantidad de tiendas en ${nombreCiudad}:`));
            let referenciaGruesa = parseInt(prompt(`Ingrese la cantidad de afiches de referencia gruesa para ${nombreCiudad}:`));
            let referenciaDelgada = parseInt(prompt(`Ingrese la cantidad de afiches de referencia delgada para ${nombreCiudad}:`));

            // Crear objeto ciudad con los datos y añadirlo a la lista
            let ciudad = new Ciudad(nombreCiudad, cantidadAfiches, cantidadTiendas, referenciaGruesa, referenciaDelgada);
            this.ciudades.push(ciudad);
        }
    }

    // Método para mostrar la distribución de cajas
    mostrarDistribucion() {
        this.ciudades.forEach(ciudad => {
            let distribucion = ciudad.calcularCajasPorReferencia();
            console.log(`Distribución para ${ciudad.nombre}:`);
            console.log(`Cajas de referencia gruesa: ${distribucion.cajasGruesa}`);
            console.log(`Cajas de referencia delgada: ${distribucion.cajasDelgada}`);
            console.log(`Cajas mixtas: ${distribucion.cajasMixtas}`);
        });
    }
}

// Crear instancia de la clase DistribucionAfiches
const distribucion = new DistribucionAfiches();

// Llamar los métodos para agregar ciudades y mostrar la distribución
distribucion.agregarCiudad();
distribucion.mostrarDistribucion();
