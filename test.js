
// Practicas con objetos dentro de objetos ("diccionarios")

const express = require('express');
const app = express();

const baseDeDatos = {
    1: { id: 1, nombre: 'Juan Pérez', edad: 30 },
    2: { id: 2, nombre: 'Ana García', edad: 25 },
    3: { id: 3, nombre: 'Roberto Gómez', edad: 35 }
};

// Estas rutas de abajo son solo ejemplos, pueden borrar y crear las suyas para practicar

// app.get('/people', obtenerTodo)
// app.get('/people/:id', obtenerPorID)
// app.post('/people', agregarPeople)
// app.delete('/people/:id', eliminarPeople)


// function obtenerTodo(req, res) {
//     const todo = Object.values(database)
//     res.json(todo)
// }

// function obtenerPorID(req, res) {
//     const buscarID = req.params.id;
//     const todo = Object.values(database);
//     const encontrado = todo.find(todo => todo.id == buscarID);
//     res.json(encontrado);
// }

// function agregarPeople(req, res) {
//     const {name, age} = req.body;
//     const newID = Max.math(... Object.values(database)) + 1
//     const newPeople = {id: newID, name, age};
//     database[newID] = newPeople;
//     res.json(newPeople);
// }

// function eliminarPeople(req, res) {
//     const eliminarID = req.params.id;
//     if (database[eliminarID]) {
//         delete database[eliminarID]}
//         res.json({message: "Usuario Eliminado"})

//     }


app.listen(3000, () => {
console.log('Server running at http://localhost:3000');
});