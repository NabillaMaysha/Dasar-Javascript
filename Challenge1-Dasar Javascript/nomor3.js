class BMI{
    constructor(b, t){
        this.berat = b
        this.tinggi = t
    }

    bmi = () => {
        return this.berat / (this.tinggi ** 2)
    }
}

let rhodey = new BMI (90, 1.7)
console.log("BMI Rhodey = " + rhodey.bmi());
let status = rhodey.bmi()
if(status > 30.0){
    console.log("Kegemukan(Obesitas)")
}else if(status <= 29.9 && status > 25.0){
    console.log("Kelebihan berat badan")
}else if(status <=24.9 && status > 18.5){
    console.log("Normal(ideal")
}else{
    console.log("Kekurangan berat badan")
}
