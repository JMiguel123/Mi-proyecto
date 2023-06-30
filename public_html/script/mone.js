/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function dolApeso(){
    var dol = document.getElementById("txtResM").value;
    var cenM = dol*24.04;
    document.getElementById("resMedM").innerHTML ="Tus " + dol + " dolares estadounidenses a pesos son: " +cenM.toFixed(0) +" pesos"; 
}

function canApeso(){
    var can = document.getElementById("txtResM").value;
    var cenM = can*17.24;
    document.getElementById("resMedM").innerHTML ="Tus " + can + " dolares canadienses a pesos son: " +cenM.toFixed(0) +" pesos"; 
}



function euApeso(){
    var eu = document.getElementById("txtResM").value;
    var cenM = eu*26.2;
    document.getElementById("resMedM").innerHTML ="Tus " + eu+ " euros a pesos son: " +cenM.toFixed(0) +" pesos"; 
}

function libApeso(){
    var lib = document.getElementById("txtResM").value;
    var cenM = lib*30.50;
    document.getElementById("resMedM").innerHTML ="Tus " + lib + " libras esterlinas a pesos son: " +cenM.toFixed(0) +" pesos"; 
}


function chileApeso(){
    var chile = document.getElementById("txtResM").value;
    var cenM = chile*0.028;
    document.getElementById("resMedM").innerHTML ="Tus " + chile + " pesos chilenos a pesos son: " +cenM.toFixed(0) +" pesos"; 
}


function urugApeso(){
    var uru = document.getElementById("txtResM").value;
    var cenM = uru*0.56;
    document.getElementById("resMedM").innerHTML ="Tus " + uru + " pesos uruguayos a pesos son: " +cenM.toFixed(0) +" pesos"; 
}


function rupApeso(){
    var ru = document.getElementById("txtResM").value;
    var cenM = ru*0.32;
    document.getElementById("resMedM").innerHTML ="Tus " + ru + " rupias a pesos son: " +cenM.toFixed(0) +" pesos"; 
}


function yenApeso(){
    var yen = document.getElementById("txtResM").value;
    var cenM = yen*0.22;
    document.getElementById("resMedM").innerHTML ="Tus " + yen + " yenes a pesos  son: " +cenM.toFixed(0) +" pesos"; 
}


function zlotyApeso(){
    var zlo = document.getElementById("txtResM").value;
    var cenM = zlo*5.78;
    document.getElementById("resMedM").innerHTML ="Tus " + zlo + " zlotys a pesos son: " +cenM.toFixed(0) +" pesos"; 
}