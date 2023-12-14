
let obj= {"punkty": [{}]}
var xmlhttp = new XMLHttpRequest();
var url = "punkty.json";

xmlhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) 
    {
    obj = JSON.parse(this.responseText);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function loadJSON(){
    let genb = document.getElementById("genbox");
    let inb = document.getElementById("inputbox");
    let ptk = "";

    
    for(let i = 1;i<obj.p.length;i++){
        ptk+='<option value="'+obj.p[i].value+'">'+obj.p[i].nazwa+'</option>';
    }
    genb.innerHTML='<select id="lista">'+ptk;
    inb.innerHTML='<input type="button" value="Wczytaj JSON" onclick="loadJSON()"> <input type="button" value="Wprowadź" onclick="wprowadzenie()">';

}
let iloscp = 100;

function wprowadzenie(){
    let wartosc = document.getElementById("wartosc")
    let drop = document.getElementById("lista")
    iloscp+=parseInt(drop.value);
    wartosc.innerHTML='Liczba punktów: '+iloscp;

}