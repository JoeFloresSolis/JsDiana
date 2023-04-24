// () Sirve para poner los datos de entrada
// {} algoritmo, pasos, procedimiento, etc


function sumar(a,b){
    console.log("A: ",a);
    console.log("B: ",b);
    let c=a+b;
    console.log("C: ",c);
    return a+b;
}

function sumar(a,b,x){
    console.log("A: ",a);
    console.log("B: ",b);
    console.log("X: ",x);
    let c=a+b+x;
    console.log("C: ",c);
    return c;
}

let resultado= sumar(1,2);
console.log("resultado: ",resultado);
