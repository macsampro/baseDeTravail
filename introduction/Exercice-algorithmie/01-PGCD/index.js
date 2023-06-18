function calculerPGCD(a,b){
    if(b === 0){
        return a;
    }else{
        return calculerPGCD(b , a % b);
    }
}

