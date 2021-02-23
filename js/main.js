var scontoMinorenni = 20;
var scontoOver = 40;
var costoKm = 0.21;
var sconto;
var offerta;
var costoBiglietto;

document.getElementById("genera_btn").addEventListener("click" , 
function() {
    var element = document.getElementById("sec_biglietto");
    element.classList.add("display_block");
    var nome = document.getElementById("get_nome").value; 
    var km = document.getElementById("get_km").value;
    var eta = document.getElementById("get_eta").value;
    if (eta == "minorenne") {
        sconto = scontoMinorenni;
        offerta = "Sconto Minorenne";
    }
    else if (eta == "over-65") {
        sconto = scontoOver;
        offerta = "Sconto Over";
    }
    else {
        sconto = 0;
        offerta = "Biglietto Standard";
    }
    console.log(sconto);
    costoBiglietto = costoKm * km;
    costoBiglietto -= costoBiglietto * sconto / 100;
    document.getElementById("nome_pax").innerHTML = nome;
    document.getElementById("offerta").innerHTML = offerta;
    document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 10);
    document.getElementById("codice").innerHTML = Math.floor(Math.random() * 100000);
    document.getElementById("costo").innerHTML = Math.round(costoBiglietto * 100) / 100 + "€";

}
);

document.getElementById("annulla_btn").addEventListener("click" , 
function() {
    location.reload();
}
);


