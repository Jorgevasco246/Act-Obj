class Animal {
    hacersonido() {
        console.log("Rawr")
    }
}

class Perro extends Animal {
    hacersonido() {
        console.log("Guau")
    }
}
class Gato extends Animal {
    hacersonido(){
        console.log("Miau")
    }
}

const perri = new Perro();
const gati = new Gato();
perri.hacersonido();
gati.hacersonido();