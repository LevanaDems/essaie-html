function Salaire(){

    var taux= document.getElementById('taux');
    var nombheure= document.getElementById('heure');
    var poste= document.getElementById('poste');

    var Salaire= nombheure+taux;
    if(poste='cadre'){

        Salaire= Salaire+50000;
    }
    else if(poste='technicien'){
        Salaire=Salaire+25000;
    }
    else{
        Salaire=Salaire+0;
    }
    return Salaire;
}