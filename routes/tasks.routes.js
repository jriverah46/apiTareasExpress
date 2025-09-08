const { Router } = require("express");
const router = Router();
const tasksController = require("../controllers/tasks.controller");

//obtener todas las tareas

router.get("/", tasksController.obtenerTareas);

//crear tarea
router.post("/", tasksController.crearTarea);

//actualizar tarea
router.put("/:id", tasksController.actualizarTarea);

module.exports = router;
