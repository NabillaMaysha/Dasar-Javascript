class Barang{
    constructor(h, j){
        this.harga = h
        this.jumlah = j
    }

    total = () => {
        return this.harga * this.jumlah
    }
}

let beras = new Barang(10000, 5)
console.log("Total harga beras = " + beras.total());
let gula = new Barang(14000, 5)
console.log("Total harga gula = " + gula.total());
let telur = new Barang(20000, 2)
console.log("Total harga telur = " + telur.total());
let minyak = new Barang(9000, 10)
console.log("Total harga minyak goreng = " + minyak.total());
console.log("_________________")
console.log("Total sembako = " + (beras.total() + gula.total() + telur.total() + minyak.total()));