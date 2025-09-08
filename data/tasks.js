let tasks = [
  { id: 1, nombre: "Estudiar Node.js", estado: false },
  { id: 2, nombre: "Hacer mini proyecto", estado: false },
];

module.exports = {
  getTasks: () => tasks ,
  createTask: (nombre, estado) => {
    const tarea = { id: tasks.length + 1, nombre: nombre, estado: estado };
    tasks.push(tarea);
    return tarea;
  },
  updateTask: (id, nombre, estado) => {
    const tarea = tasks.find((task) => task.id === id);

    if (!tarea) {
      return null;
    }
    tarea.nombre = nombre ?? tarea.nombre;
    tarea.estado = estado ?? tarea.estado;
    return tarea;
  },
};
