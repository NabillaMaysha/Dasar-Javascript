let a = 4, b = 100000, r = 3;
let total = 0;
for (let i = a; i <=b; i=i*r) {
    console.log(i)
    total += i ;
}
console.log("_____________")
console.log("Jumlah deret = " + total)