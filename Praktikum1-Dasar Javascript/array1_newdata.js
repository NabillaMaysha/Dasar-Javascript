// array string
let jurusan = ["Rekayasa Perangkat Lunak","Teknik Komputer dan Jaringan"]

// array numeric
let tingkatan_kelas = [10,11,12]

//array objek
let siswa = [
    //objek pertama
    {
        nama: "Yaya", jurusan: "RPL"
    },
    //objek kedua
    {
        nama: "Ying", jurusan: "TKJ"
    },
    //objek ketiga
    {
        nama: "Gopal", jurusan: "RPL"
    }
]

console.log("Jumlah elemen array jurusan = " + jurusan.length);
console.log("Jumlah elemen array tingkatan_kelas = " + tingkatan_kelas.length);
console.log("Jumlah elemen array siswa = " + siswa.length);


let kota = ["Malang", "Surabaya", "Tulungagung"]

console.log("Isi array kota");
console.log(kota);
console.log("Jumlah data = " + kota.length);

console.log("-------------------------");

//tambah data kota baru
kota.push("Banyuwangi")

console.log("Isi array kota saat ini");
console.log(kota);
console.log("Jumlah data saat ini = " + kota.length);

console.log("-------------------------");

let barang = [
    { nama: "Rinsoo", harga: 5000},
    { nama: "Moonlight", harga: 4000}
]

console.log("Isi array barang");
console.log(barang);
console.log("Jumlah data = " + barang.length);

console.log("-------------------------");

//tambah data barang baru
barang.push(
    { nama: "Mloto", harga: 1000}
)

console.log("Isi array barang saat ini");
console.log(barang);
console.log("Jumlah data saat ini = " + barang.length);


let nama = ["Ana", "Sulaiman", "Putri"]

console.log("Data array");
console.log(nama);
console.log("Jumlah data saat ini = " + nama.length);

console.log("-------------------------");

//hapus data nama
nama.splice(2,1)

console.log("Data array saat ini");
console.log(nama);
console.log("Jumlah data saat ini = " + nama.length);
