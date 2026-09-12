class User {
    constructor(ad, soyad, dogumTarixi) {
        this.ad = ad;
        this.soyad = soyad;
        this.dogumTarixi = dogumTarixi;
    }

    yasHesablayan() {
        let indikiIl = new Date().getFullYear();
        let dogumIli = new Date(this.dogumTarixi).getFullYear();
        let yas = indikiIl - dogumIli;

        console.log(this.ad, this.soyad, "Yaş:", yas);
    }

    static check() {
        console.log("men User clasinin funksiyasiyam");
    }
}

let user1 = new User("Kenan", "Memmedov", "2000-05-15");

user1.yasHesablayan();
User.check();