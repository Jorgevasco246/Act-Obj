class CuentaBancaria {
    constructor(titular, saldo = 0) {
        this.titular = titular
        this.saldo = saldo
    }

    depositar(dinero) {
        this.saldo = this.saldo + dinero
       // this.saldo += dinero
    }

    retirar(dinero) {
        if (dinero <= this.saldo) {
            this.saldo -= dinero
        } else {
            console.log("No hay plata suficiente")
        }
    }

    mostrarSaldo() {
        console.log("Saldo de "+ this.titular+ ":" +this.saldo);
    }
}

const cuenta = new CuentaBancaria("Luis", 100);
cuenta.depositar(120);
cuenta.retirar(300);
cuenta.mostrarSaldo();