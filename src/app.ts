import { Vacanca } from "./interfaces/vacanca";

const nom = document.getElementById("nom")! as HTMLInputElement;
const preu = document.getElementById("preu")! as HTMLInputElement
const pais = document.getElementById("pais")! as HTMLInputElement;
const descripcio = document.getElementById("descripcio")! as HTMLInputElement;

const vacancaList : Vacanca[] = [];


function crear() {

    let vacanca : Vacanca = {
        nom : "",
        preu : 0,
        pais : "",
        descripcio : ""
    };
    vacanca.nom = nom.value;
    vacanca.preu = parseInt(preu.value);
    vacanca.pais = pais.value;
    vacanca.descripcio = descripcio.value;
    vacancaList.push(vacanca);

    let llista = "";
    for(let i = 0 ; i < vacancaList.length ; i++){
        llista += `<li><a onclick = "mostrarDetalls(${i})"> ${vacancaList[i].nom} </a></li>`
    }

    document.getElementById("llistat")!.innerHTML = llista
    document.getElementById("form")!.reset()
     
}


function mostrarDetalls(i : number){
    let v = vacancaList[i]
    document.getElementById("detalls")!.innerHTML = `<div>Nom: ${v.nom}</div><div>Preu: ${v.preu}</div><div>Descripció: ${v.descripcio}</div>`;
}
