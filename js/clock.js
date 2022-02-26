let isim=prompt("isminizi giriniz",)
isimGir=document.querySelector("#myName").innerHTML=isim

function tarihSaat() {
    var date = new Date().toLocaleString();
    document.getElementById("myClock").innerHTML = date;
}
setInterval(tarihSaat, 1000); 