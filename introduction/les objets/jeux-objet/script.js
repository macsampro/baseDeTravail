

function nombresFou(max) {
    return Math.floor(Math.random() * max);
}
let chifreSecret = nombresFou(100);
let nbrJoueur = 0;

nbrJoueur = prompt("devine mon chifre")



while(nbrJoueur != chifreSecret){

    if (nbrJoueur < chifreSecret) {
        
        nbrJoueur = prompt("trop PETIT, tu peux réessayer")        
    
        }else if(nbrJoueur > chifreSecret){
        
        nbrJoueur = prompt("trop GRAND, tu peux réessayer")        
        }
            
    }
    alert("!!! FÉLICITATION !!!");
            
            
            
            
