

let area = document.querySelector("textarea");
area.focus();


function encriptar (){
    let texto = document.querySelector(".entrada").value;
    let textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector("#salida").value = textoCifrado;
    document.querySelector(".entrada").value;
    document.getElementById("relleno").style.visibility = "hidden";
    document.getElementById("salida").style.visibility = "visible";
    document.getElementById("copy").style.visibility = "visible";
    }

function desencriptar (){ 
    let texto = document.querySelector(".entrada").value; 
    let textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
    document.querySelector("#salida").value = textoCifrado; 
    document.querySelector(".entrada").value;
}

function copiar (){
    let contenido = document.getElementById('salida');
    contenido.select();
    contenido.setSelectionRange(0, 99999);
    document.execCommand('copy');
}


function magia (){
    document.getElementById("content").style.visibility = "visible";
     $(document).ready(function() {
        setTimeout(function() {
            $("#content").fadeOut(1500);
        },2000);
        setTimeout(function() {
        $("#content").fadeIn(1500);
    },0);
    });
    }