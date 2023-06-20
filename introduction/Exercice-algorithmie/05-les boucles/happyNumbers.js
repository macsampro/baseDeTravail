function HappyNumber(n) {

    let result = 0;
    let conteur = 0;
    
    while (conteur<100 && result !== 1) {
        let nombre = n.toString().split("");
       
        if(conteur < 100){
            conteur++;
            for (let i = 0; i < nombre.length; i++) {
                nombre[i] = Math.pow(nombre[i], 2);
                result += nombre[i];
                }

        }else{
            console.log(n + "is not happy number");
        }      
           
        
    }
  }
  
  console.log(HappyNumber(15));
