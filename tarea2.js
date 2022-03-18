const $botonsubmit=document.querySelector("#submit")
$botonsubmit.onclick=function(){
    
    const $elementoNombreCompleto = document.querySelectorAll(".nombre-completo-usuario")
    let nombreCompleto = "";
    for(let i=0;i<$elementoNombreCompleto.length;i++){
        nombreCompleto +=` ${$elementoNombreCompleto[i].value}`
    }
    document.querySelector("h1").innerText = `Bienvenido, ${$elementoNombreCompleto[0].value}`
    document.querySelector("#resultado").innerText = nombreCompleto
}
//primero habia guardado variable por variable(nombre,apellido.etc) pero busque automatizar
//al maximo.
