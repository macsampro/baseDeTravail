
let heure = document.getElementById("idHeure");

function afficherHeure() {
    let hlocalvf = new Date().toLocaleTimeString("fr");
    heure.innerText = hlocalvf;
    
    
    
    
    if( new Date().getSeconds() % 3 === 0){
        heure.classList.add("interval")
    }else{
        heure.classList.remove("interval")
    }
    
}
setInterval(afficherHeure, 1000);