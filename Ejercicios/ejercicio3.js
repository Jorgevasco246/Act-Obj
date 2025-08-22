class persona {
    constructor (nombre, edad, profesion){
        this.nombre=nombre
        this.edad=edad
        this.profesion=profesion
    }
    presentarse () {
        return "Hola señorit@ "+ this.nombre + ". Usted tiene "+ this.edad + " y trabajas de "+ this.profesion
    }
    mayor() {
        if (this.edad >= 18) {
            return "Usted es mayor de edad";
        } else {
            return "Usted es menor de edad";
        }
    }
}
const mipersona= new persona ("Jorge", 19, "Ingeniero")
console.log(mipersona.presentarse())
console.log(mipersona.mayor())