let json={
    "nombre": "Juan",
    "apellido": "Pérez",
    "edad": 30,
    "direccion": {
      "calle": "Av. Libertador",
      "numero": 123,
      "ciudad": "Buenos Aires",
      "pais": "Argentina"
    },
    "telefonos": [
      {
        "tipo": "celular",
        "numero": "123-456-7890"
      },
      {
        "tipo": "trabajo",
        "numero": "098-765-4321"
      }
    ]
  }
  console.log(json.telefonos[0].tipo);