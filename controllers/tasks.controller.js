const { json } = require("express");
const tasks = require("../data/tasks");

const obtenerTareas = (req, res) => {
  res.json(tasks.getTasks());
};

const crearTarea = (req, res) => {
  if (!req.body.nombre) {
    return res.status(400).json({ message: "El campo 'nombre' es requerido" });
  }
  const tarea=tasks.createTask(req.body.nombre,req.body.estado)
  res.status(201).json(tarea);
};

const actualizarTarea = (req, res) => {

  const tarea = tasks.updateTask(parseInt(req.params.id),req.body.nombre,req.body.estado)

  if (!tarea) {
    return res.status(404).json({ message: "tarea no encontrada" });
  }

  res.json(tarea);
};
const group = {
  obtenerTareas,
  crearTarea,
  actualizarTarea,
};
module.exports = group;
