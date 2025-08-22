class rectangulo {
    constructor(ancho,alto) {
        this.ancho=ancho
        this.alto=alto
    }
    area () {
        return  (this.ancho * this.alto)
    }
    perimetro () {
        return (this.alto+ this.ancho)
    }
    cuadrado (){
    if (this.ancho===this.alto) {
        return  ("Es un cuadrado")
    } else {
        return ("No es un cuadrado")
    }
}
}
const Mirectangulo= new rectangulo(43,43)
console.log("Tu area es: "+ Mirectangulo.area())
console.log("Tu perimetro es: "+ Mirectangulo.perimetro())
console.log("¿Que es? "+ Mirectangulo.cuadrado())