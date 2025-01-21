
// const miTitulo = document.querySelector("h1")
// miTitulo.textContent = 'Hello Word!!'

// definiendo una variable
// let miVariable = 'Israel';

/*
document.querySelector("html").onclick = function () {
    alert("¡Ouch! ¡Deja de pincharme!");
}; */

let miImage = document.querySelector("img");
miImage.onclick = function(){
    let myScr = miImage.getAttribute('src');
    if (myScr === 'images/Firefox_logo.png'){
        miImage.setAttribute('src','images/Firefox_logo2.png');
    }
    else{
        miImage.setAttribute('src','images/Firefox_logo.png')
    }
};

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function estableNombreUsuario(){
    let miNombre = prompt('Por favor, Ingresa tu nombre.');
    if (!miNombre){ // si no hay un nombre volvemos a llamar la funcion
        estableNombreUsuario();
    } else{
        localStorage.setItem('nombre', miNombre);
        miTitulo.textContent = 'Moxila es genial ' + miNombre;
    }
}

if (!localStorage.getItem('nombre')){
    estableNombreUsuario();
}else{
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Moxila es genial ' + nombreAlmacenado;
}

miBoton.onclick = function(){
    estableNombreUsuario();
};
