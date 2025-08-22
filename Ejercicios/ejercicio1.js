//Ejercicio 1
class Carro {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    antiguo (){
        if (this.año< 2000) {
            console.log("tu carro es antiguo")
        }
        else {
            console.log("Es un carro nuevo")
        }
    }

    Alto (){
        if(this.marca ==  "Mercedes", "BMW", "Audi") {
            console.log ("Es de gama alta")
        } else {
            console.log("Tu carro es de gama baja")
        }
    }
}


const miCarro = new Carro("BMW", "Z", 219);

console.log("Tu carro es un " + miCarro.marca + " Con un modelo "+ miCarro.modelo + " Del año " + miCarro.año);

miCarro.antiguo()
miCarro.Alto()

