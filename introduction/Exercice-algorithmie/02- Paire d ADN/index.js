    function trouverComplementaires(adn){
        let complementaires = [];
        for(let i = 0; i < adn.length; i++){
            switch(adn[i]){
                case "A":
                    complementaires.push("T");
                    break;
                case "T":
                    complementaires.push("A");
                    break;
                case "C":
                    complementaires.push("G");
                    break;
                case "G":
                    complementaires.push("C");
                    break;
                default:
                    alert("Base inconnue : " + adn[i]);
                    break;
            }
        }
        return complementaires;
    }

    let adn = "ATCGX"; 
    let complementaires = trouverComplementaires(adn);
    alert(complementaires);






