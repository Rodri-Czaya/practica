// Practica con array que contiene objetos

// El servidor ya esta configurado (pueden cambiar el puerto si es necesario)
// Recuerden que no hay index.html, solo las rutas que uds definan para practicar


// ATENCION: Practiquen metodos como find() y sort() por si les piden ordenar un array o encontrar algo dentro de un array

const express = require('express');
const app = express();

const mascotas = [
    {
        nombre: 'Max',
        especie: 'Perro',
        raza: 'Labrador',
        edad: 3
    },
    {
        nombre: 'Minina',
        especie: 'Gato',
        raza: 'Siamés',
        edad: 2
    },
    {
        nombre: 'Paco',
        especie: 'Pez',
        raza: 'Goldfish',
        edad: 1
    }
];


// Estas rutas de abajo son solo ejemplos, pueden borrar y crear las suyas para practicar. Pueden practicar put, delete etc
// Utilicen IA para que les ayude y guie en el proceso. Pueden pasarle la base de datos, una de las rutas de ejemplo
// y pedirle que les ayude con otros tipos de ruta. Tambien que les ayude a ordenar objetos dentro de un array en base a algun elemento

// app.get('/sebas', traerTodo)
// app.get('/sebas/:id', buscarPorID)



// function traerTodo(req, res) {
//   res.json(mascotas);
// }

// function buscarPorID(req, res) {
//     const idabuscar = req.params.id;
//     const encontrado = mascotas.find(mascota => mascota.id == idabuscar);
//     res.json(encontrado);
// }


app.listen(3000, () => {
   console.log('Server running at http://localhost:3000');
   });