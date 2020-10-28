class Lingkaran{
    constructor(j){
        this.jarijari = j
    }

    luas = () => {
        return 3.14 * (this.jarijari**2)
    }

    keliling = () => {
        return 2 * 3.14 * this.jarijari
    }
}

class Tabung extends Lingkaran{
    constructor(j, t){
        super(j)
        this.tinggi = t
    }

    volume = () => {
        return 3.14 * (this.jarijari**2) * this.tinggi
    }

    luasPermukaan = () => {
        return 2 * 3.14 * this.jarijari * (this.jarijari + this.tinggi)
    }

    luasSelimut = () => {
        return 2 * 3.14 * this.jarijari * this.tinggi
    }
}

class Kerucut extends Lingkaran{
    constructor(j, t){
        super(j)
        this.tinggi = t
    }

    volume = () => {
        return 1/3 * 3.14 * (this.jarijari**2) * this.tinggi
    }

    luasPermukaan = () => {
        return 3.14 * this.jarijari * (this.jarijari + this.tinggi)
    }

    luasSelimut = () => {
        return 3.14 * this.tinggi * this.jarijari
    }
}

class Bola extends Lingkaran{
    constructor(j){
        super(j)
    }

    volume = () => {
        return 4/3 * 3.14 * (this.jarijari**3)
    }

    luasPermukaan = () => {
        return 4 * 3.14 * (this.jarijari**2)
    }

}

let tabung = new Tabung(7.5, 50)
console.log("Volume Tabung = " + tabung.volume());
console.log("Luas Permukaan Tabung = " + tabung.luasPermukaan());
console.log("Luas Selimut Tabung = " + tabung.luasSelimut());

console.log("____________________")

let kerucut = new Kerucut(10, 40)
console.log("Volume Kerucut = " + kerucut.volume());
console.log("Luas Permukaan Kerucut = " + kerucut.luasPermukaan());
console.log("Luas Selimut Kerucut = " + kerucut.luasSelimut());

console.log("____________________")

let bola = new Bola(15)
console.log("Volume Bola = " + bola.volume());
console.log("Luas Permukaan Bola = " + bola.luasPermukaan());
