class Tanah{
    constructor(p,l,h,n){
        this.panjang = p
        this.lebar = l
        this.harga = h
        this.ppn = n
    }

    luas = () => {
        return this.panjang * this.lebar
    }

    harga_tanah = () => {
        return this.panjang * this.lebar * this.harga
    }

    jumlah_ppn = () => {
        return this.panjang * this.lebar * this.harga * this.ppn / 100 
    }

}

let tanah = new Tanah(20.5,30,1500000,15)
console.log("Luas Tanah = " + tanah.luas());
console.log("Harga Tanah = " + tanah.harga_tanah());
console.log("Harga PPN = " + tanah.jumlah_ppn());
console.log("Harga Akhir = " + (tanah.harga_tanah() + tanah.jumlah_ppn()));