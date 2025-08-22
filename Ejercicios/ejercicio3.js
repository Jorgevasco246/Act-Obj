class persona {
    constructor (nombre, edad, profesion){
        this.nombre=nombre
        this.edad=edad
        this.profesion=profesion
    }
    presentarse () {
        return "Hola señorit@"+ this.nombre + "Usted tiene"+ this.años + "y trabajas en"+ this.profesion
    }
    mayor (){
        if (this.edad<=18)
        return "Usted es mayor de edad"
    }
}
const mipersona= new persona ("Jorge", 19, "Ingeniero")
console.log(mipersona)