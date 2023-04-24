//ACEPTA DE TODO
let variableLet=[1,2,3,4];
//ACEPTA DE TODO
var variableVar={
    'nombre':'joe',
    'apellido':'flores'
};
//ACEPTA DE TODO PERO NO CAMBIA
const variableConst=2;

console.log("--------------------------------");

let x = 1;
if (true) {
    let x = 2;
    console.log(x);
    if(true){
        let x=5
        console.log(x);
    }
    console.log(x);
}
console.log(x);
console.log("--------------------------------");

var a=2;
var producto=a*5;
console.log(producto);//10
function suma(){
    var producto=a*2;
    console.log(producto);//4
}
suma();
console.log(producto);//4


console.log("--------------------------------");
console.log("const:",variableConst);
console.log("var:",variableVar.apellido);
console.log("apellido: "+variableVar.apellido+"nombre: "+variableVar.nombre);
console.log(`apellido: ${variableVar.apellido} nombre: ${variableVar.nombre}`);
console.log(`let: ${variableLet[0]}`);
console.log("--------------------------------");


// NODE - GIT - VISUAL
// LET VAR CONST
// SCOPE
// ARRAY - OBJETO
// Console.log "" + y ``
/* Una nueva línea	\n
Un tabulador	\t
Una comilla simple	\'
Una comilla doble	\"
Una barra inclinada	\\ */

//GIT


// OBJETOS: JSON Y EL XML
// funciones