"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nom = document.getElementById("nom");
var preu = document.getElementById("preu");
var pais = document.getElementById("pais");
var descripcio = document.getElementById("descripcio");
var vacancaList = [];
function crear() {
    var vacanca = {
        nom: "",
        preu: 0,
        pais: "",
        descripcio: ""
    };
    vacanca.nom = nom.value;
    vacanca.preu = parseInt(preu.value);
    vacanca.pais = pais.value;
    vacanca.descripcio = descripcio.value;
    vacancaList.push(vacanca);
    var llista = "";
    for (var i = 0; i < vacancaList.length; i++) {
        llista += "<li><a onclick = \"mostrarDetalls(".concat(i, ")\"> ").concat(vacancaList[i].nom, " </a></li>");
    }
    document.getElementById("llistat").innerHTML = llista;
    document.getElementById("form").reset();
}
function mostrarDetalls(i) {
    var v = vacancaList[i];
    document.getElementById("detalls").innerHTML = "<div>Nom: ".concat(v.nom, "</div><div>Preu: ").concat(v.preu, "</div><div>Descripci\u00F3: ").concat(v.descripcio, "</div>");
}
