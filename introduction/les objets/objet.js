function noterEleve(){
    let eleves = [
        {
            prenom:"luna",
            point:73,
            note:"",
        },
        {
            prenom:"joe",
            point:80,
            note:"",
        },
        {
            prenom:"thomas",
            point:79,
            note:"",
        },
        {
            prenom:"raman",
            point:45,
            note:"",
        },
        {
            prenom:"alexandra",
            point:92,
            note:"",
        },
        {
            prenom:"Jeanne",
            point:42,
            note:"",
        },

    ]
    
    for(let i = 0; i < eleves.length; i++){

        if( eleves[i].point < 60){
            eleves[i].note = "E";
        }
        else if( eleves[i].point< 70){
            eleves[i].note = "D";
        }
        else if( eleves[i].point< 80){
            eleves[i].note = "C";
        }
        else if( eleves[i].point< 90){
            eleves[i].note = "B";
        }
        else if( eleves[i].point< 100){
            eleves[i].note = "A";
        }else{
            alert("erreur");
        }

    }
    return(eleves);
}



console.log(noterEleve());
