/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function pulAcen(){
    var pul = document.getElementById("txtRes").value;
    var cen = pul/2.54;
    document.getElementById("resMed").innerHTML ="Tus " + pul + " pulgadas a centimetros son: " +cen.toFixed(0) +" centimetros"; 
}

function pieAcen(){
    var pie = document.getElementById("txtRes").value;
    var cen = pie/30.48;
    document.getElementById("resMed").innerHTML ="Tus " + pie + " pies a centimetros son: " +cen.toFixed(0) +" centimetros"; 
}

function yaAcen(){
    var ya = document.getElementById("txtRes").value;
    var cen = ya/91.44;
    document.getElementById("resMed").innerHTML ="Tus " + ya + " yardas a centimetros son: " +cen.toFixed(0) +" centimetros"; 
}

function milAcen(){
    var mil = document.getElementById("txtRes").value;
    var cen = mil/160900;
    document.getElementById("resMed").innerHTML ="Tus " + mil + " millas a centimetros son: " +cen.toFixed(0) +" centimetros"; 
}