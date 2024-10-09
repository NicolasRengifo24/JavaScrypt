/*
function imprimir_Fac(prod,val,cant){
    for(let i= 0; i<cant;i++){
        console.log(`producto: ${prod[i]}   precio: ${val[i]}`)
    }
}
let productos = new Array(5);
let valor = new Array(5); 
let cantidad = 0;

function caja (){
    
    let total_fact = 0;
   
    for (let i =0;i<productos.length;i++){
    productos[i] = prompt("ingrese el nombre del producto")
    valor[i] = parseInt(prompt("ingrese el valor de del producto"))
    cantidad++
    total_fact += valor[i]
    // preguntar si desea agregar mas articulos
    continuar = confirm("desea agregar mas articulos?")
    if(continuar == false){
        imprimir_Fac(productos,valor,cantidad)
        break;
    }
   
   }  
   console.log(`el valor total es: ${total_fact}`)

    
}

caja();


class Persona{

    constructor(nombre, edad,profesion){
        this._nombre = nombre;
        this._edad = edad;
        this._profesion = profesion;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nuevo_nombre){
        this._nombre = nuevo_nombre;
    }
    get edad(){
        return this._edad;
    }
    set edad (nueva_edad){
        this._edad = nueva_edad;
    }
    get profesion(){
         return this._profesion;
    }
    set profesion (nueva_profesion){
        this._profesion = nueva_profesion;
    }

    presentarse(){
        console.log(`HOLA! Soy ${this._nombre}, tengo ${this._edad} años y soy ${this._profesion}`)
    }
    aumento_Edad(){
       return this._edad +=1;
    }

    static input_usuario(){

        let nombre;
        let edad;
        let profesion;

        nombre = prompt(`ingrese el nombre`);
        edad = parseInt(prompt(`ingrese la edad`));
        profesion = prompt(`ingrese la profesion`);

        return new Persona(nombre,edad,profesion);
    }

}

 const per1 = Persona.input_usuario();
 const per2 = Persona.input_usuario();
 const per3 = Persona.input_usuario();

 per1.presentarse();
 console.log( `la edad actual es ${per1.aumento_Edad()}`);
 per1.presentarse();
 per2.presentarse();
 console.log( `la edad actual es ${per2.aumento_Edad()}`);
 per2.presentarse();
 per3.presentarse();
 console.log( `la edad actual es ${per3.aumento_Edad()}`);
 per3.presentarse();

 */
 class Persona {
    constructor(nombre,edad) {
      this._nombre = nombre;
      this._edad = edad
    }
  
    // Getter
    get nombre() {
      return this._nombre;
    }
  
    // Setter
    set nombre(nuevoNombre) {
      this._nombre = nuevoNombre;
    }
    
    get edad(){
        return this._edad
    }

    set edad (nueva_edad){
        this._edad = nueva_edad
    }
  }
  
  const persona = new Persona('Ana',18);
  console.log(persona.nombre);  // Usa el getter: "Ana"
  console.log(persona._edad);
  persona.nombre = 'Laura';
  persona.edad = 25;  // Usa el setter para cambiar el nombre
  console.log(persona.nombre );  // "Laura"
  console.log(persona.edad)