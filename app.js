/* 
1- Türkçe 40 4 puan
2- Matematik 40
3- Sosyal Bilimler 20
4- Fen bilimleri 20

------> 100 Puanı ÖSYM veriyor
------> Okul Puanı Max 60 veriyor */

let turkceDogru, turkceYanlis = 0;
let matematikDogru, matematikYanlis = 0;
let sosyalDogru, sosyalYanlis = 0;
let fenDogru, fenYanlis = 0;
let puan = 0;
let okulPuani = 0;

let yeniSatir = "\r\n";
let mesaj = "Tyt Puan Hesaplama uygulamasına Hoşgeldiniz" + yeniSatir +
    "1-Puan Hesapla" + yeniSatir +
    "2-Çıkış Yap";

// alert(mesaj);

let secim = prompt(mesaj);

switch (secim) {

    case "1":

        okulPuani =Number(prompt("Okul Puanınınızı Giriniz"));

        turkceDogru = Number(prompt("Türkçe Doğru Sayısı"));
        turkceYanlis = Number(prompt("Türkçe Yanlış Sayısı"));

        matematikDogru = Number(prompt("Matematik Doğru Sayısı"));
        matematikYanlis = Number(prompt("Matematik yanlış Sayısı"));

        sosyalDogru = Number(prompt("Sosyal doğru sayısı"));
        sosyalYanlis = Number(prompt("Sosyal Yanlış Sayısı"));

        fenDogru = Number(prompt("Fen doğru sayısı"));
        fenYanlis = Number(prompt("Fen Yanlış Sayısı"));

        let dogruSayisi = turkceDogru+matematikDogru+sosyalDogru+fenDogru;
        let yanlisSayisi = turkceYanlis+matematikYanlis+sosyalYanlis+fenYanlis;

        let kalanDogruSayisi = dogruSayisi - (yanlisSayisi/4);

        puan = (kalanDogruSayisi*4)+100 + okulPuani;
        alert("Tyt Puanınız : " + puan);
        break;

    case "2":
        alert("Uygulamadan çıkış yapıldı......");
        break;

    default:

        alert("Lütfen geçerli bir değer giriniz");
        break;
}
