class User {
    constructor(ad, soyad, dogumTarixi) {
        this.ad = ad;
        this.soyad = soyad;
        this.dogumTarixi = new Date(dogumTarixi);
    }

    yasHesablayan() {
        let indi = new Date();

        let ferqMillisaniye = indi - this.dogumTarixi;

        let yas = Math.floor(ferqMillisaniye / (1000 * 60 * 60 * 24 * 7 * 4 * 12));

        console.log(this.ad + " " + this.soyad + " " + yas);
    }

    static check() {
        console.log("men User clasinin funksiyasiyam");
    }
}



let user1 = new User("Mehdi", "Faracov", "2012-06-27");

user1.yasHesablayan();

User.check();