let numeroSecreto=0;
let intentos=0;
let listaSorteados=[];
let numeroMaximo=10;

let numeroIntentos=2;
let tasadeasierrto=0;
function asignarTextoElemento(elemento,texto) {
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}
function verificarIntento(){
    let numeroDeusuario=parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeusuario===numeroSecreto){
        asignarTextoElemento('p',`El numero es correcto, lo intentaste ${intentos} ${intentos===1?'vez':'veces'}. Cantidad de juegos disponibles: ${numeroIntentos-listaSorteados.length==1 ? 'Ultima oportunidad': numeroIntentos-listaSorteados.length}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        console.log(tasadeasierrto);
    }else {
        if(numeroSecreto<numeroDeusuario){
        asignarTextoElemento('p','El numero secreto es menor');
        }else{
        asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos ++; 
        tasadeasierrto++;
        limpiarCaja();
    }
    return; 
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
}

function gernerarNumero() {
    let numeroGenerado=Math.floor(Math.random()*numeroMaximo)+1;

    if(listaSorteados.length==numeroIntentos){
        asignarTextoElemento('p',`Adivinaste todos los numeros, felicitaciones!! Tu tasa de aciertos fue ${(numeroIntentos/tasadeasierrto)*10}/10 en ${numeroIntentos} juegos`)
    }                                                                                                                                                                               
        // Si el numero generado pertenece a la lista
    else{
        if(listaSorteados.includes(numeroGenerado)){
            return gernerarNumero();
        }else{
            listaSorteados.push(numeroGenerado);
            return numeroGenerado;                                                                                              
        }
    }
}

function valoresIniciales(){
asignarTextoElemento('h1','Bienvenidos al juego secreto');
asignarTextoElemento('p',`Ingrese un numero entre 1 y ${numeroMaximo}`);
numeroSecreto = gernerarNumero();
intentos =1;
// if(numeroIntentos===listaSorteados.length){
//     tasadeasierrto=0;
// }else{
    tasadeasierrto++;
// }
}

function reinicioJuego(){
limpiarCaja();
valoresIniciales();
document.querySelector('#reiniciar').setAttribute('disabled','true');
console.log(numeroSecreto);
}

valoresIniciales();
console.log(numeroSecreto);