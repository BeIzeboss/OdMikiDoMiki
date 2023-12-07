f = document.getElementById("form");
w = document.getElementById("wypluwacz");

/*
osoba = {
    imie: "Aleksander",
    nazwisko: "Mika",
    wiek: 18,
    zestawDane: function(){
        return "imię " + this.imie + "<br> nazwisko: " + this.nazwisko;

    }
};
console.log(osoba);
w.innerHTML = osoba.zestawDane()
*/

/*
f.name.disable = true; //nie zadziała (działa na przyciskach)
f.name.addEventListener("change", function(e) {
    if(f.name.value.length > 3){       
        f.name.style.backgroundColor="green";
    } else{       
        f.name.style.backgroundColor="red";
    }
});
f.surname.addEventListener("change", function(e) {
    if(f.surname.value.length > 3){       
        f.surname.style.backgroundColor="green";
    } else{       
        f.surname.style.backgroundColor="red";
    }
});
*/

    
    const srexTekst = /^[a-zA-Z]+$/
    const lrexNumber = /^[0-9]+$/
    


f.addEventListener("change", function(e) {
    ValidT(f.name,4,srexTekst);
    ValidT(f.surname,4,srexTekst);
    ValidN(f.children,-1,lrexNumber);
    ValidN(f.shoesize, 14,lrexNumber);
    ValidN(f.level,-1,lrexNumber);
});


function ValidT(v,n,r){  
      
    if(v.value.length >= n && r.test(v.value)){       
        v.style.backgroundColor="green";
    } else{       
        v.style.backgroundColor="red";
    }
}
function ValidN(v,n,r){    
    if(v.value >= n && r.test(v.value)){       
        v.style.backgroundColor="green";
    } else{       
        v.style.backgroundColor="red";
    }
}



w.innerHTML = "no siema";



function guzik() {
    name = document.getElementById("name").value
    surname = document.getElementById("surname").value
    dob = document.getElementById("dob").value
    gender = document.getElementById("gender").value
    children = document.getElementById("children").value
    shoesize = document.getElementById("shoesize").value
    level = document.getElementById("level").value
    color = document.getElementById("color").value
    
   


    //regex regular expression
    rexTekst = /^[a-zA-Z]+$/.test(name);
    crexNumber = /^[0-9]+$/.test(children);
    srexNumber = /^[0-9]+$/.test(shoesize);
    
    var error;

    error = { name:0, surname:0, dob:0, level:0, shoesize:0, children:0}
    if(name.length < 3 || rexTekst == false){
        error["name"] = 1;
    }

    if(surname.length < 3 || srexTekst == false){
        error["surname"] = 1;
    }

    const startDate = new Date("1907-03-04");
    const endDate = new Date("2023-09-29");

    if(dob.value >= startDate && dob.value <= endDate){
        error["dob"] = 1;
    }

    if(level.value < 0 || level.value > 50 ||  lrexNumber == false){
        error["level"] = 1;
    }

    if(shoesize.value < 14 || shoesize.value > 51 ||  srexNumber == false){
        error["shoesize"] = 1;
    }

    if(children.value < 0 ||  crexNumber == false){
        error["children"] = 1;
    }


    
    

/*
    if(dob.length >= 1){
        error[0] += 0;
        error[1] += "dob";
    }
    else{
        error[0] += 1;
        error[1] += "dob";

    }
 
    
*/


    //console.log("rexNumber ", rexNumber)
    //console.log("rexTekst ", rexTekst)
    //console.log("rexTN ", rexTN)
    console.log(error)
}