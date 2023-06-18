// let depot = 100;
// let taux = 20;
// let seuil = 170;
// let interet = 0;
// let nbranee = 0;

// while (interet < seuil) {
//     interet += (depot * taux/100); 
//     nbranee++;
// }
// console.log(interet);
// console.log("nombre d'anée " + nbranee);

let depot = 100;
let taux = 20;
let seuil = 170;
let anee = 0;

while (depot<seuil ){
    anee++;
    depot += depot+ (depot*taux/100)
}
console.log(depot);
console.log(anee);

