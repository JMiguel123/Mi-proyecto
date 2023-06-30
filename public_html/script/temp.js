/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function fareAcelsius(){
    var far = document.getElementById("txtFarenheit").value;
    var cel =((far - 32)*5)/9;
    document.getElementById("resCelFar").innerHTML ="Tus " + far + " grados Farenheit a Celsius son: " +cel.toFixed(2) +" grados"; 
}


function kelAcelsius(){
    var kel = document.getElementById("txtFarenheit").value;
    var cel =kel-273.15;
    document.getElementById("resCelFar").innerHTML ="Tus " + kel + " grados Kelvin a Celsius son: " +cel.toFixed(2) +" grados"; 
}
