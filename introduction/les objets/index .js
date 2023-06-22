
let heure = document.getElementById("idHeure");

function afficherHeure() {
    let hlocalvf = new Date().toLocaleTimeString("fr");
    heure.innerText = hlocalvf;
}
setInterval(afficherHeure, 1000);

if( heure === (heure % 3 === 0)){
    
    Element.classList.add("interval");
    
}else{
    Element.classList.remove("interval");
    
}
