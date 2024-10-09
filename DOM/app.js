

// let elemento = document.title
// console.log(elemento);

// let elementow = window
// console.log(elementow);


// let elementoid = document.getElementById("titulodom");
// console.log(elementoid);

// let contenidoid = document.getElementById("contenido");
// console.log(contenidoid);


// let op1 = document.getElementById("p1");
// op1.innerHTML = "Javascrypt";

// let op2 = document.getElementById("p2");
// op2.innerHTML = "Phyton";

// let op3 = document.getElementById("p3");
// op3.innerHTML= "C++";



// let elementoClase = document.getElementsByClassName("listas")
// console.log(elementoClase);

// let elementosclase2 = document.getElementsByClassName("editores")
// console.log(elementosclase2)

// let elementoTag = document.getElementsByTagName("p")
// console.log(elementoTag)

// let documentoQ = document.querySelector("ul")
// console.log(documentoQ)
// console.log(documentoQ.childElementCount)
// console.log(documentoQ.children[0])


// let elementoP= document.getElementsByTagName("p");
// console.log(elementoP);

// for (let i=0;i<elementoP.length;i++){

// console.log(elementoP[i].textContent)

// }

// elementoP[0].innerHTML="prueba";


// let op1 = document.getElementById("p1");

// op1.style.background = "blue"
// op1.style.borderRadius = "80px"


// function verFecha(){

//     let fech = document.getElementById("resultado")
//     fech.innerHTML = Date()
// }


function quitarFecha(){

    let qfech =document.getElementById("resultado")
    qfech.innerHTML = "fecha"
}

function temperatura(){

let numero = parseInt(document.getElementById("dato1").value)

let calculo = numero - 273.5;

let res1 = document.getElementById("res");
res1.innerHTML = (`resultado ${calculo}`);
}
