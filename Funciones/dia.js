function obtenerDiaDeLaSemana(numero) {
    let nombre;
    let valor=2;
    switch (numero) {
      case 1:
        nombre = 'Lunes';
        break;
      case 2:
        nombre = 'Martes';
        break;
      case 3:
        nombre = 'Miércoles';
        break;
      case 4:
        nombre = 'Jueves';
        break;
      case 5:
        nombre = 'Viernes';
        break;
      case 6:
        nombre = 'Sábado';
        break;
      case 7:
        nombre = 'Domingo';
        break;
      default:
        nombre = 'Número de día de la semana inválido';
    }
  
    return nombre;
  }
  

  let dias={
    dia1:"lunes",
    "dia2":"martes",
    "dia3":"miercoles",
    "dia4":"jueves",
    "dia5":"viernes",
  }


  

  console.log(dias.dia1)
  console.log(dias["dia2"])
  console.log(obtenerDiaDeLaSemana(1)); // Devuelve 'Lunes'
  console.log(obtenerDiaDeLaSemana(7)); // Devuelve 'Número de día de la semana inválido'
  