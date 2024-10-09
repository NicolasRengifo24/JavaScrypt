//  console.log("Hola Mundo");

//  //variables
//  let numero1= 45;
//  let numero2= 39;
//  const pi= 3.141516;
//  let estado= true;
 

// let suma,resta,mult,div,mod

// suma=numero1+numero2;
// resta=numero1 - numero2;
// mult= numero1 * numero2;
// div= numero1 / numero2;
// mod= numero1 % numero2;


// console.log(suma);

// // Concatenar valores

// console.log("el primer valor es" + numero1);
// console.log("el segundo valor es" + numero2);
// console.log("la suma de : " + numero1 + " y " + numero2 + " es " + suma); 
// console.log(`la resta de ${numero1} y ${numero2} es ${resta}`)
// console.log(`la multiplicacion de ${numero1} y ${numero2} es ${mult}`)
// console.log(`la divicion de ${numero1} y ${numero2} es ${div}`)
// console.log(`el modulo de ${numero1} y ${numero2} es ${mod}`)


// let nu1 = parseInt(prompt("ingrese el primer numero"));
// let nu2 = parseFloat(prompt("ingrese el segundo numero"));
// let su= nu1 + nu2

// console.log(`el primer valor ingresado es  ${nu1} y el segundo valor es ${nu2}`)
// console.log("la suma de : " + nu1+ " y " + nu2+ " es " + su); 


// Numeros aleaorios entre 1 y 5

// let ale = Math.floor(Math.random()*50)+1;
// let ale1 = Math.floor(Math.random()*100);

// console.log(ale);
// console.log(ale1);


// estructura del IF

// let calificacion

// calificacion=parseFloat(prompt("ingrese su calificacion"));
// if (calificacion >= 3.5){
//     console.log("aprovado")
// }else if(calificacion <= 3.0){
//     console.log("reprovado")
// }else if(calificacion >= 3.8 || calificacion <= 4.0){
//     console.log("debe nivelar")
// }

/*
let generacion;

generacion=parseInt(prompt("ingrese su año de nacimiento"));
if (generacion >= 1883 && generacion <= 1900){
    console.log(" eres de la generacion perdida")
}else if(generacion >= 1901 && generacion <= 1924){
    console.log(" eres de la generacion grandiosa")
}else if (generacion >= 1925 && generacion <= 1945){
    console.log(" eres de la generacion silenciosa")
}else if (generacion >= 1946 && generacion <= 1964){
    console.log(" eres de la generacion Baby boomers")
}else if (generacion >= 1965 && generacion <= 1980){
    console.log(" eres de la generacion X")
}else if (generacion >= 1981 && generacion <= 1986){
    console.log(" eres de la generacion Y")
}else if (generacion >= 1997 && generacion <= 2012){
    console.log(" eres de la generacion Z")
}else if (generacion >= 2013 && generacion <= 2025){
    console.log(" eres de la generacion alpha")
}
*/

// OPERADOR TERNARIO

// condicion ? sentenciaV : Sentencia F

// let divisa;
// let cantidad;
// let USD =4280;
// let EUR=4728;
// let GBP=5601;


// cantidad = prompt("ingrese aqui la cantidad en COP");
// divisa=prompt("Seleccone EUR , USD ,GBP");

// switch(divisa.toUpperCase()){
//     case "USD":  console.log(cantidad/USD)
//     break;
//     case "EUR": console.log(cantidad/EUR)
//     break;
//     case  "GBP": console.log(cantidad/GBP)
    
    
    
    
//     default:console.log("invalido")
// }

// let tabla = parseInt(prompt("ingrese el numero de la tabla"));

// for(let i = 1;i<=10;i++){
//     console.log(tabla + " *" + i +" =" + tabla*i )
// }

// clase con el mentor

// script para determinar si un numero es par o impar
/*
let num = parseInt(prompt("indique el numero"));
let residuo=num%2;
let div=residuo==0;
console.log("el numero es par? "+ div );
*/
// script de menu -----------
/*
let seleccion_cliente = prompt("SELECCIONE : CARNE,PESCADO O ENSALADA");

switch(seleccion_cliente.toLowerCase()){
    case "carne": alert("¿Desea tomar vino Tinto?")
    break;
    case "pescado": alert("¿Desea tomar vino blanco?")
    break;
    case "ensalada": alert("¿Desea tomar agua?")
    break;
    default : alert("Seleccion incorrecta")
};
*/

// script para la estacion del año----------------
/*
let Seleccion_usuario = parseInt(prompt("ingrese el numero del mes de 1 a 12"));

switch(Seleccion_usuario){
    case 12:
    case 1:
    case 2:
         alert("La estacion es invierno")
    break;
    case 3:
    case 4:
    case 5:
         alert("La estacion es primavera")
    break;
    case 6:
    case 7:
    case 8:
         alert("La estacion es verano")
    break;
    case 9:
    case 10:
    case 11:
         alert("La estacion es otoño")
    break;
    default: alert("seleccion invalida")
}
*/
// sala de video juegos
/*
let pago= parseInt(prompt("ingrese los creditos 1 , 2 , 3 o 4"));

switch(pago){
    case 1 : alert("puede ingresar a : consolas")
    break;
    case 2 : alert("puede ingresar a : consolas y juegos 2D")
    break;
    case 3 : alert("puede ingresar a : consola, Juegos 2D y Juegos 3D")
    break;
    case 4 : alert("puede ingresar a : consolas,Juegos 2D,Juegos 3D Y Realidad Virtual")
    break;
    default: alert("SELECCION INVALIDA")
}
*/

// Descuentos
/*
let Compra = parseInt(prompt("Ingrese el valor de su factura"));
let descuento;
let total_descuento;
let total_pagar;

if (Compra < 100000){
    alert("su compra de "+ Compra+ " No Tiene Descuento")
}else if (Compra >= 100000 && Compra <=300000){
    descuento= 0.05
    total_descuento= Compra * descuento
    total_pagar= Compra -total_descuento
    alert("su compra de "+"$"+ Compra +" aplica para el 5% de descuento por lo tanto cancela "+"$ "+ total_pagar)
}else if (Compra >= 300000 && Compra <=500000){
    descuento= 0.10
    total_descuento= Compra * descuento
    total_pagar= Compra -total_descuento
    alert("su compra de "+"$"+ Compra +" aplica para el 10% de descuento por lo tanto cancela "+"$ "+ total_pagar)
}else if  (Compra >= 400000){
    descuento= 0.15
    total_descuento= Compra * descuento
    total_pagar= Compra -total_descuento
    alert("su compra de "+"$"+ Compra +" aplica para el 15% de descuento por lo tanto cancela "+"$ "+ total_pagar)
}else { 
    alert("formato o entrada incorrecta")
}


 
 
 for( let i=1;i<=10;i++){
   for (let j=1;j<=10;j++){
    console.log(`${i} * ${j} = ${(i*j)}`);
   }
console.log(" ")
 }

 */

 

// let sum=0


// for (let i=1;i<=100;i++){
//     if (i % 2 !==0){
//     sum+=i
//     console.log(`la suma de los numero impares del 1 al ${i} es ${sum}`)
//     }
// }

// let num=1;
// let sum=0;

// while(num>=0){
//     num=parseInt(prompt("igrese un numero mayor a 0 "));
//     if(num>=0){
//         sum +=num;
//     }
//     console.log(sum)
// }
// console.log(`la suma de los numeros ingresados es ${sum}`)

// desarrollo menu de opciones

// let opcion;
// let estado= true;
// let raiz,seno,coseno,numero;


// while (estado){

//     opcion = (parseInt(prompt(`SELECCIONE UN OPCION \n 1. Raiz \n 2. Seno de N1 \n 3. Coseno N1 \n 4. Salir`)));
//     switch(opcion){
        
//         case 1: alert("Selecciono Raiz");

//         numero = (parseFloat(prompt(`INGRESE EL NUMERO PARA CALCULAR LA RAIZ`)));
        
//         raiz = Math.sqrt(numero);
    
//         alert(`LA RAIZ DE ${numero} ES: ${raiz}`);
//         break;

//         case 2: alert("Selecciono seno");

//         numero = (parseFloat(prompt(`INGRESE EL NUMERO PARA CALCULAR EL SENO`)));
        
//         seno = Math.sin(numero);
    
//         alert(`EL SENO DE ${numero} ES: ${seno}`);
//         break;

//         case 3: alert("Selecciono coseno");

//         numero = (parseFloat(prompt(`INGRESE EL NUMERO PARA CALCULAR EL COSENO`)));
        
//         raiz = Math.cos(numero);
    
//         alert(`EL COSENO DE ${numero} ES: ${raiz}`);
//         break;

//         case 4: alert("SALIR")
//         estado = false;
//         break;

//         default: alert("seleccion no valida");

//     }
// }


// adivinar numero 



/*
let aleatorio =Math.floor(Math.random()*50)+1;
let seleccion_usuario; 
let estado = true;
let intentos = 0;



while (estado) {
   
    seleccion_usuario = prompt("Adivina el número de 1 a 50:");
    intentos++;
    
    if (seleccion_usuario === null) {
        alert("Juego cancelado.");
        estado = false; 
    } else if (seleccion_usuario > aleatorio) {
        alert("No, el número generado es menor.");
    } else if (seleccion_usuario < aleatorio) {
        alert("No, el número generado es mayor.");
        
    } else {
        alert(`¡Adivinaste! al intento # ${intentos} El número generado es ${aleatorio}`);
        estado = false; 
        
    }
    
    
}
*/

//
// let ac, acu, at;

// let r, lado, b , h;

// const pi = 3.1416;

// let opcion;



// do{

//     opcion = parseInt(prompt(`1. Area Circulo \n 2. Area del Cuadrado \n 3. Area del Triangulo \n 4. Salir`));

//     switch(opcion){


//     case 1: alert("Area del circulo");
//     // A = pi * r*r
//     r = parseFloat(prompt("Ingrese el valor del radio"));

//     ac = pi * (r*r);

//     alert(`El area del circulo es: ${ac}`);
  
//     break;
//     case 2: alert("Area del cuadrado");

//    // A = lado * lado

//    lado = parseFloat(prompt("Ingrese el valor del lado"));

//    acu = (lado*lado);

//    alert(`El area del cuadrado es: ${acu}`);

//     break;

//     case 3: alert("Area del triangulo");

//     // A = B*H/2

//     b = parseFloat(prompt("Ingrese el valor de la base"));
//     h = parseFloat(prompt("Ingrese el valor de la altura"));

//     at = (b*h)/2;

//     alert(`El area del triangulo es: ${at}`);

//     break;
//     case 4:
//       alert("SALIENDO.....");
//       

//     break;

//     default: 
//     alert("Opcion no valida");

  

//   }

  

// }while(opcion!=4);

/*
let k,c,f;

let kc, kf, fc, fk,ck,cf;

let opcion;


do{

    opcion = parseInt(prompt(`desea realizar la conversion de \n 1. kelvin a celcius \n 2. kelvin a fahrenheit \n 3. fahrenheit a celcius \n 4. fahrenheit a kelvin \n 5. celcius a kelvin \n 6. celcius a fahrenheit \n 7. Salir`));

    switch(opcion){


        case 1: alert("kelvin a celcius");
            // C = K - 273.15
            k = parseFloat(prompt("Ingrese el valor en KELVIN"));

            kc= k-273.15;

            alert(`la conversion de Kelvin a Celcius es: ${kc}°C`);
            break;
    
        case 2: alert("Kelvin a Fahrenheit");
            // F= (K-273.15)*9/5+32
            k = parseFloat(prompt("Ingrese el valor en KELVIN"));
            kf = (k-273.15)*9/5+32;
            alert(`la conversion de Kelvin a Fahrenheit es: ${kf}°F`);
            break;
   
         case 3: alert("fahrenheit a celcius");
            // c= (F − 32)× 5/9 
            f = parseFloat(prompt("Ingrese el valor en Fahrenheit"));
            fc= (f-32)*5/9;
            alert(`la conversion de Fahrenheit a Celcius es: ${fc}°C`);
            break;

        case 4: alert ("fahrenheit a kelvin");
            // (F − 32) × 5/9 + 273.15
            f = parseFloat(prompt("Ingrese el valor en Fahrenheit"));
            fk = (f-32)*5/9 + 273.15;
            alert(`la conversion de Fahrenheit a Kelvin es: ${fk}°K`);
            break;
        case 5: alert ("celcius a kelvin")
            //  K= C + 273.15 
            c= parseFloat(prompt("Ingrese el valor en Celcius"));
            ck = c +273.15;
            alert(`la conversion de Celcius a Kelvin es: ${ck}°K`);
            break;
        case 6 : alert("celcius a fahrenheit");
            // F=(C × 9/5) + 32 
            c= parseFloat(prompt("Ingrese el valor en Celcius"));
            cf=(c*9/5)+32;
            alert(`la conversion de Celcius a Fahrenheit es: ${cf}°F`);
            break;
        case 7:
            alert("SALIENDO.....");
            break;
       

        default: 
            alert("Opcion no valida");
            
    }

}while(opcion !==7);
*/
/*   PIRAMIDE DE *
let operacion=""; // aqui hago la suma de los asteriscos
let linea_asteriscos=""; // aqui imprimo cada suma separada con un salto de linea \n
let cantidad = parseInt(prompt("ingrese el numero de asteriscos"));
for(let i = 1;i<=cantidad;i++){
    operacion+="*";
    linea_asteriscos+=operacion +"\n";
}alert(linea_asteriscos) ;
 console.log(linea_asteriscos);
*/

// let intentos = 0;
// let contrasena = "Geronimo123";
// let estado =true;
 
// while (estado) {
   
//     let User_Cont= prompt("INGRESA LA CONTRASEÑA");
    
    
//     if (User_Cont === null) {
//         estado = false; 
//     } else if (intentos===3) {
//         alert("INTRUSO TRATANDO DE INGRESAR AL SISTEMA");
//         estado=false;
//     } else if (User_Cont!=contrasena) {
//         alert("ACCESO DENEGADO");
//         intentos++;
//     } else {
//         alert(`ACCESO CONCEDIDO`);
//         estado = false; 
            

// }
// }


// Ejemplo 1

//saludar("Pedro");

// function saludar(nombre){
//     alert(`Hola ${nombre}`);
//   }
  
  
//   // Ejemplo 2
  
//   console.log(raiz(18));
  
//   function raiz(numero){
  
//   return Math.sqrt(numero);
  
//   }


// function exponente (base,cuadrado){
//     return Math.pow(base,cuadrado);
// }
    
// console.log(exponente(12,6))



 
/*
let opcion;

do{

    opcion = parseInt(prompt(`desea realizar la conversion de \n 1. kelvin a celcius \n 2. kelvin a fahrenheit \n 3. fahrenheit a celcius \n 4. fahrenheit a kelvin \n 5. celcius a kelvin \n 6. celcius a fahrenheit \n 7. Salir`));

    switch(opcion){


        case 1: alert("kelvin a celcius");
            // C = K - 273.15
            alert(`la conversion de Kelvin a Celcius es: ${kcf(k())}°C`);
            break;
    
        case 2: alert("Kelvin a Fahrenheit");
            // F= (K-273.15)*9/5+32
            alert(`la conversion de Kelvin a Fahrenheit es: ${kff(k())}°F`);
            break;
   
         case 3: alert("fahrenheit a celcius");
            // c= (F − 32)× 5/9 
            alert(`la conversion de Fahrenheit a Celcius es: ${fcf(f())}°C`);
            break;

        case 4: alert ("fahrenheit a kelvin");
            // (F − 32) × 5/9 + 273.15
            alert(`la conversion de Fahrenheit a Kelvin es: ${fkf(f())}°K`);
            break;
        case 5: alert ("celcius a kelvin");
            //  K= C + 273.15 
            alert(`la conversion de Celcius a Kelvin es: ${ckf(c())}°K`);
            break;
        case 6 : alert("celcius a fahrenheit");
            // F=(C × 9/5) + 32 
            alert(`la conversion de Celcius a Fahrenheit es: ${cff(c())}°F`);
            break;
        case 7:
            alert("SALIENDO.....");
            break;
       

        default: 
            alert("Opcion no valida");
            
    }
}while(opcion !=7);

function k(){
    let valor;
    valor = parseFloat(prompt("Ingrese el valor en KELVIN"));
  return valor;
}

function f(){
    return parseFloat(prompt("Ingrese el valor en Fahrenheit"));
  }

function c(){
    return parseFloat(prompt("Ingrese el valor en Celcius"));
  }



  


function kcf(k){

    return parseFloat((k - 273.15));
}

function kff(k){
    return parseFloat((k-273.15)*9/5+32);
}
// kf, fc, fk,ck,cf;
function fcf(f){
    return parseFloat((f-32)*5/9);
}

function fkf(f){
    return parseFloat((f-32)*5/9 + 273.15);
}
 function ckf(c){
    return parseFloat((c +273.15));
 }

function cff(c){
    return parseFloat((c*9/5)+32);
}
*


// ARREGLOS


let estudiantes = ["Laura", "Julian", "Andres", "Oscar", "Paola"];

console.log(estudiantes)

// Añadir un elemento al final 

console.log(estudiantes.push("Ricardo"));

console.log(estudiantes)

// Agrego elementos al inicio

console.log(estudiantes.unshift("Esmeralda"));

console.log(estudiantes)

// Añadir elementos en alguna posicion

console.log(estudiantes.splice(2 , 0  , "Sofia"));

console.log(estudiantes);

// Elimminar elemento en una posicion

console.log(estudiantes.splice(2, 1));
// Eliminar ultimo

console.log(estudiantes.pop());

console.log(estudiantes)


// Eliminar el primer elemento

console.log(estudiantes.shift());

console.log(estudiantes)

// Posicion de un elemento

console.log(estudiantes.indexOf("Andres"));

console.log(estudiantes)
// Recorrer el arreglos

// op 1

estudiantes.forEach((est) =>{

    console.log(est);

});

estudiantes.forEach((est)=>{
    if(est === estudiantes[3]){
        console.log(est);
    }
});

let vector =[];
vector[0]=15;
vector[1]=20;
vector[2]=25;
vector[3]=30;

vector.forEach((i)=>{
    console.log(i);
});


//////////////////      PRACTICA DE ARREGLOS //////////////////////7777
let estudiantes = parseInt(prompt("INGRESE EL NUMERO DE ESTUDIANTES"));
let arreglo_calificaciones = [];


 function Añadir(){
for ( let i=0;i<=estudiantes;i++){
    let calificacion = parseFloat(prompt(`ingrese la calificacion del estudiante ${i+1}`));
    arreglo_calificaciones.push(calificacion);
}
}
Añadir();
console.log(arreglo_calificaciones);

//Calculos//

//calculo del promedio//
let suma = 0;
arreglo_calificaciones.forEach((est) => {
suma += est

});
console.log(suma);

let promedio = suma / arreglo_calificaciones.length

alert(`el promedio de la clase es ${promedio}`);
*/


// let numeros =[12,23,18,16,19];
// let pares=0;
// let impares=0;

// for (let i=0;i<numeros.length;i++){
//     if(numeros[i]%2==0){
//      pares += numeros[i]
//     }else{
//         impares+=numeros[i]

//     }
// }
// console.log(`los numeros pares suman ${pares}`);
// console.log(`los numeros impares suman ${impares}`);


// let numeros =[12,23,18,16,19];
// let max= maximo(numeros)
// let min= minimo(numeros)
 

// function maximo(numeros){
// let num_max = Math.max.apply(null,numeros);
// console.log(num_max);

// };

//  function minimo(numeros) {
// let num_min = Math.min.apply(numeros);
// console.log(num_min);
    
// };
// let nun = new Array(5)
/*

let tamanio = parseInt(prompt("INGRESE LA CANTIDAD DE ESTUDIANTES"));
let calificaciones = new Array(tamanio);

for (let i =0;i<tamanio;i++){
    calificaciones[i] = parseFloat(prompt("INGRESE LA NOTA"));
}

for (let i =0;i<tamanio;i++){
    console.log(`calificacion ${i+1} - ${calificaciones[i]}`); 
}


//calculo del promedio//
let max = calificaciones[0];
let min= calificaciones[0];
let suma = 0;


for ( let i=0;i<tamanio;i++){
    suma += calificaciones[i]
    if (calificaciones[i]>max){
         max = calificaciones[i]
    }
    if (calificaciones[i]<min){
        min = calificaciones[i]
    }
}


console.log(`la suma es ${suma}`);
console.log(`el promedio es ${suma / tamanio}`);
console.log(`calificacion maxima ${max}`);
console.log(`calificacion minina ${min}`);

*/

///////// OBJETOS///////77
/*
let carro1 = {
    marca : "ford",
    modelo: "fiesta",
    color: "rojo",
    anio: "2000",
    placa: "ABC123",
}

let carro2 = {
    marca: "renault",
    modelo: "logan",
    color: "azul",
    anio: "2019",
    placa: "XYZ321",
    acelerar (){
        console.log(`el carro esta acelerando`)
    }
}

console.log("datos carro 1", carro1)
console.log("datos carro 2",carro2)

console.log(`la marca del carro 1 es : ${carro1.marca}`)
console.log(`la placa del carro 2 es : ${carro1.placa}`)

carro1.marca = "toyota"
carro1.color = "gris"

console.log("los datos del vehiculo 1 son:",carro1)
carro2.acelerar()



class persona{
    constructor(nombre,edad){
        this._nombre = nombre;
        this._edad = edad;
    }
    saludar(){
        console.log(`hola soy ${this._nombre} y tengo ${this._edad} años`)
    }


    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = this.nombre
    }
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad=this.edad;
    }
}

const per1 = new persona("juan",25);
per1.saludar();
const per2 = new persona("andres",27);

per1.nombre= "lorena";


per1.saludar();
per2.saludar();
*/
/*
class Libro{

    constructor(titulo,autor,paginas){

        this._titulo = titulo;
        this._autor = autor;
        this._paginas = paginas;
    }
    get titulo(){
        return this._titulo;
    }
    set titulo(titulo){
        this._titulo = titulo;
    }
    get autor(){
        return this._autor;
    }
    set autor(autor){
        this._autor = autor
    }
    get paginas(){
        return this._paginas;
    }
    set paginas(paginas){
        this._paginas = paginas;
    }

    mostrarInfo(){
      console.log(`el titulo del libro es: ${this._titulo} el autor es: ${this._autor} y tiene ${this._paginas} paginas`)  
    }

}   

const l1 = new Libro(`el relaro de un naufrago`,`pepito`,`230`);
const l2 = new Libro(`el principito`,`jorge`,`180`);
const l3 = new Libro(`el programador`,`lucia`,`430`);

console.log(l1.titulo)
console.log(l2.titulo)
console.log(l3.titulo)

l1.autor = "carlos";
l2.autor = "pablo";
l3.autor = "ana";

l1.mostrarInfo()
l2.mostrarInfo()
l3.mostrarInfo()
*/
/*
class Producto{

    constructor (nombre,precio,cantidad){

        this._nombre = nombre;
        this._precio = precio;
        this._cantidad = cantidad;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio = precio;
    }
    get cantidad(){
        return this._cantidad;
    }
    set cantidad(cantidad){
        this._cantidad =cantidad ;
    }

    mostrarNombreProducto(){
        console.log(`el producto es ${this._nombre}`)
    }
    valorTotal(){
        return this._precio * this._cantidad;
    }
    modificarCantidad(nuevaCantidad){
        this._cantidad = nuevaCantidad;
        console.log(`la nueva cantidad es: ${this._cantidad}`)
    }
}

const producto1 = new Producto("Mouse",45000,5);
const producto2 = new Producto("monitor",500000,7);


producto1.mostrarNombreProducto();
producto2.mostrarNombreProducto();

console.log(`el valor en stock del producto1 es: ${producto1.valorTotal()}`);
console.log(`el valor en stock del producto2 es: ${producto2.valorTotal()}`);

producto1.modificarCantidad(10);
producto2.modificarCantidad(4);

console.log(`el valor en stock del producto 1  ahora es: ${Producto1.valorTotal()}`);

/////////////////////////////////////////////////////////////////////7777


class Producto{

    constructor(nombre,precio,cantidad){

        this._nombre = nombre;
        this._precio = precio;
        this._cantidad = cantidad
    }


    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio = precio;
    }

    get cantidad(){
        return this._cantidad;
    }

    set cantidad(cantidad){
        this._cantidad = cantidad;
    }


    mostrarNombreProducto(){
        console.log(`El nombre del producto es: ${this._nombre}, el precio es: ${this._precio} y la cantidad es: ${this._cantidad}`);
    }
    valorTotal(){
      
        return this._precio * this._cantidad;
    }


    modificarCantidad(nuevoCantidad){

        this._cantidad = nuevoCantidad;

        console.log(`La nueva cantidad es: ${this._cantidad}`)

    }

    anadirStock(nuevoCantidad){

        return this._cantidad += nuevoCantidad;
    }
    venderStock(nuevoCantidad){
        this._cantidad -= nuevoCantidad;
    }


    operacion(){
        let n
        nCantidad = parseFloat(prompt('Ingrese la nueva cantidad'));

         let op = parseInt(prompt("Ingrese que tipo de operacion desea realizar 1. Añadir 2. Restar"));

         if(op===1){
            console.log(prod3.anadirStock(nCantidad));
    
        }else{

         console.log(prod3.venderStock(nCantidad));
        }
    }
    static crearProducto(){
        let productos; 
        let precios; 
        let cantidades; 
        
        do{    
        productos = prompt('Ingrese el nombre del producto');
        }while(!productos)
        do{
        precios = parseFloat(prompt('Ingrese el precio del producto'));
        }while(isNaN(precios)||precios<0)
        do{
        cantidades = parseFloat(prompt('Ingrese la cantidad del producto'));
        }while(isNaN(cantidades)||cantidades<0)
        return new Producto(productos, precios, cantidades);
    }

    

}
const prod1 = new Producto("Mouse", 45000, 5);
const prod2 = new Producto("Monitor", 145000 , 3);


const prod3 = Producto.crearProducto();



prod1.mostrarNombreProducto();
prod2.mostrarNombreProducto();
prod3.mostrarNombreProducto();
console.log(` El valor del producto 1 es: ${prod1.valorTotal()}`);
console.log(` El valor del producto 2 es: ${prod2.valorTotal()}`);
console.log(` El valor del producto 3 es: ${prod3.valorTotal()}`);


prod3.operacion();


prod1.modificarCantidad(8);
prod2.modificarCantidad(6);



prod1.mostrarNombreProducto();
prod2.mostrarNombreProducto();
prod3.mostrarNombreProducto();
console.log(` El valor del producto 1 es: ${prod1.valorTotal()}`);
console.log(` El valor del producto 2 es: ${prod2.valorTotal()}`);
console.log(` El valor del producto 3 es: ${prod3.valorTotal()}`);
*/

// Crea una clase Termostato que tenga los atributos temperatura y estado (encendido o apagado).
//  Debe tener métodos para subir la temperatura, bajar la temperatura, encender y apagar el termostato, y mostrar el estado actual.

class Termostato{

        constructor(temperatura,estado){
            this._temperatura = temperatura
            this._estado = estado
        }

        get temperatura(){
             return this._temperatura;
        }
        set temperatura(Nueva_Temperatura){
            this._temperatura=Nueva_Temperatura;
        }
        get estado(){
            return this._estado;
        }
        set estado(Nuevo_Estado){
            this._estado = Nuevo_Estado;
        }
        
        subir_Temperatura(){
            
           if (this._estado !=="Encendido") {
                console.log(`imposible ralizar la accion termostato esta apagado`)
            }else{
                this._temperatura += Math.floor(Math.random()*51)
            }
        }
        bajar_Temperatura(){
           if (this.temperatura >= 0){ 
                this._temperatura -= Math.floor(Math.random()*51)
        }else{
            console.log(`imposible medir bajo cero`)
        }
        };
        encender_Termostato(){
        this._estado = "Encendido"; 
        }
        apagar_Termostato(){
            this._estado = "Apagado";
        }
        presentar(){
            console.log( `el estado actual del termostato es ${this._temperatura} - ${this._estado}`)
            
        }

        menu(){
            let  seleccion;
            do{
              seleccion = parseInt(prompt(`indique que desea realizar \n 1.subir temperatura \n 2. bajar temperatura \n 3.encender \n 4.apagar \n 5.salir`));
            
            switch(seleccion){
                
                case 1 :  this.subir_Temperatura()
                break;
                case 2 : this.bajar_Temperatura()
                break;
                case 3 :  this.encender_Termostato(); 
                break
                case 4 :  this.apagar_Termostato();
                break;
                case 5 : seleccion = 5
                break;
                default:  console.log("Opción no válida");
            
            }
            }while(seleccion !== 5)
        }
        
}
const ter1 = new Termostato(0,"Apagado")
const ter2 = new Termostato(0,"Apagado")


ter1.menu();
ter1.presentar();

ter2.menu();
ter2.presentar();

