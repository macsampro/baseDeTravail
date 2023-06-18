let choix = ["pierre":, "feuille", "ciseau"]


function Bot(){
    let index = Math.floor(Math.random() * choix.length);
    return choix[index];
}

function buttonClicked(){
    let button = document.getElementById("myButton");
    let resuBot = document.getElementById("myButton");
    let resuPlayer = document.getElementById("start");
    button.textContent = Bot();
    
    if(resuBot === resuPlayer){
        alert("egaliter recommance")
    }else if (resuBot.textContent("pierre") === resuPlayer.textContent("feuille")){
        alert("voila voila")
    }
}


