
let compo = document.getElementById("BLABLA");
compo.innerHTML="<p> teste mon BLABLA </p>";


let input = document.getElementById("userInput")
let reponse = document.getElementById("reponse")

input.addEventListener("change", (event)=> {reponse.innerHTML=input.value});

// input.addEventListener("change", myFonction);

// function myFonction () {
//     reponse.innerHTML = input.value;
// }


let input2 = document.getElementById("input2")
let p2 = document.getElementById("p2")

input2.addEventListener( "change",(event) =>{p2.innerHTML = input2.value + p2.innerHTML} )