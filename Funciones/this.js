const persona = {
    nombre: 'Juan',
    apellido: 'Pérez',
    edad: 30,
    saludar: function() {
        let nombre="joe";
        console.log(`${this}`);
        console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}.`);
        console.log(`Hola, mi nombre es ${nombre} ${this.apellido}.`);
    },
    animal:{
        nombre: 'chasi',
        tipo: 'perro',
        saludarMascota: function() {
            console.log(`${this}`);
            console.log(`Hola, mi nombre es ${this.nombre} soy ${this.tipo} de ${persona.nombre}`);
        },
    }
};

  function saludo() {
    console.log("HOLIS, mi nombre es "+persona.nombre);
    console.log(`HOLIS, mi nombre es ${persona.nombre} ${persona.apellido}.`);
  }
console.log(persona.nombre)
persona.saludar();
saludo();
persona.animal.saludarMascota();
var nombre='diana'
this.nombre='diana'
this.apellido='lizana'
console.log(this);