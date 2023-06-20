//💻 EXERCICE 01
//Ecrire une fonction permettant de trouver le plus grand nombre dans le tableau et de le retourner.

function LargestNumber() {
  let tab = [2, 4, -1, 28, 3, -10, 29, 12, 21 - 3];
  let top = tab[0];

  for (let i = 1; i < tab.length; i++) {
    if (tab[i] > top) {
      top = tab[i];
    }
  }
  return top;
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 💻 EXERCICE 02
// Ecrire une fonction qui va iteré de 1 à 100 et :
// Pour toute les multiples de 3 afficher dans la console le mot 'Fizz'
// Pour toute les multiples de 5 afficher dans la console le mot 'Buzz'
// Pour toute les multiples de 3 et 5 afficher dans la console le mot 'FizzBuzz'

function FizzBuzz() {
  for (let i = 0; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
    }
  }
}
console.log(+FizzBuzz());
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 💻 EXERCICE 03
// Ecrire une fonction qui prendra en paramètre une année et qui retrounera le siècle auquel elle appartient.
// Exemple :
// CenturyFromYear(1905) => 20
// CenturyFromYear(1700) => 17
// function siecle(annee) {
//     let group = Math.floor(annee / 1000) + 1;
//     return group;
// }
// console.log(siecle(1984));

function siecle(annee) {
  let group = Math.floor(annee / 100) + 1;
  return group;
}
console.log("vous etes bien au " + siecle(1400) + " siecle");
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 💻 EXERCICE 04
// Ecrire une fonction qui prendre en paramètre un mot composé de lettre minuscule et qui lui donnera un score en fonction du nombre de voyelle et de consonne.

// 1 consonne = 2 points

// 1 voyelle = 1 point

// Exemple :
// wordScore('abcde') = 8

function wordScore(inputString) {
  const tVoyelle = ["a", "e", "i", "o", "u", "y"];
  let argument = inputString.toLowerCase("");
  let resultat = 0;

  for (let i = 0; i < inputString.length; i++) {
    if (tVoyelle.includes(argument[i])) {
      resultat += 1;
    } else {
      resultat += 2;
    }
  }
  return resultat;
}

console.log("le scor de vaux letre est " + wordScore("abcde"));
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 💻 EXERCICE 05 // Fibonacci 01
// Suite de Fibonacci : La suite de Fibonacci est une suite d'entiers dans laquelle chaque terme est la somme des deux termes qui le précèdent. Elle commence généralement par les termes 0 et 1 (parfois 1 et 1) et ses premiers termes sont : 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
// Écrivez une fonction qui prend un entier n et renvoie le n-ième terme de la suite de Fibonacci.

function fibonacci(n) {
  let n1 = 0;
  let n2 = 1;
  let n3 = 1;
  for (let i = 0; i <= n; i++) {
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
  }
  return n3;
}

console.log("resultat de fibonacci exercice 01 = " + fibonacci(10));

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 💻 EXERCICE 06 // Fibonacci 02
// La suite de la suite de Fibonacci : Écrivez une fonction qui prend un entier n en paramètre et renvoie la somme des n premiers termes pairs de la suite de Fibonacci.

function sumFibonacci(n) {
  let n1 = 0;
  let n2 = 1;
  let n3 = 0;
  let nPaire = 0;
  let nPaireTrouver = 0;

  while (n > nPaireTrouver) {
    n3 = n1 + n2;

    if (n3 % 2 === 0) {
      nPaire += n3;
      nPaireTrouver++;
    } else {
    }
    n1 = n2;
    n2 = n3;
  }
  return nPaire;
}

console.log("resultat de fibonacci exercice 02 = " + sumFibonacci(3));

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 💻 EXERCICE 07 // Fibonacci 03
// En fonction d'un entier positif num, retournez la somme de tous les nombres impairs de Fibonacci qui sont inférieurs ou égaux à num.
// Par exemple, SumOddFiboNumber(10) doit retourner 10 car tous les nombres impairs de Fibonacci inférieurs ou égaux à 10 sont 1, 1, 3 et 5.
// Exemples :
// SumOddFiboNumber(10) => 10
// SumOddFiboNumber(1000) => 1785
// SumOddFiboNumber(4000000) => 4613732

function SumOddFiboNumber(n) {
  let n1 = 0;
  let n2 = 1;
  let n3 = 1;
  let nImperTrouver = 0;

  while (n > n3) {
    if (n3 % 2 === 1) {
      nImperTrouver += n3;
    } else {
    }
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
  }
  return nImperTrouver;
}

console.log("resultat de fibonacci exercice 03 = " + SumOddFiboNumber(10));

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 💻 EXERCICE 08 // nombres heureux :
//Ecrire une fonction qui va retourner les 5 premiers nombres heureux

// function HappyNumber(n) {
//   let numbers = n.toString().split("");

//   for (let i = 0; i < numbers.length; i++){
//     numbers[i] = Math.pow(numbers[i], 2);
//   }

//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++){
//     sum += numbers[i];
//   }
//   return sum;
// }

// console.log(HappyNumber(19)); // Retourne 82

function HappyNumber(n) {
  let nombre = n.toString().split("");
  let result = 0;

  if (result == n) {
    console.log(result +"n'est pas un happy number, nombre identique");

  }else if(!result == 1){
    for (let i = 0; i < nombre.length; i++) {
      nombre[i] = Math.pow(nombre[i], 2);
      result += nombre[i];
    }
    console.log(n + " est un happy number");
  }else{
    console.log(n +"n'est pas un happy number");
  }

}

console.log(HappyNumber(50));
console.log(typeof result);