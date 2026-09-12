class Car {
    constructor(model, marka, il) {
        this.model = model;
        this.marka = marka;
        this.il = il;
    }

    yasHesabla() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.il;
    }

    static info() {
        console.log("Men Car clasinin metoduyam");
    }

    randomIl() {
        const randomYear = Math.floor(Math.random() * (2020 - 1980 + 1)) + 1980;
        console.log(randomYear);
    }
}


const masin = new Car("BMW X5", "BMW", 2015);

console.log("Masinin yasi:", masin.yasHesabla());

Car.info();

masin.randomIl();