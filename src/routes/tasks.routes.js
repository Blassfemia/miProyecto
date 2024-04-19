import { Router } from "express";
import { authRequired } from "../midlewares/validationToken.js";
import { getTasks, getTask, updateTask, deleteTask, createTask } from "../controllers/task.controller.js";
import { validateSchema } from "../midlewares/validator.midlewores.js";
import { createTaskSchema } from "../schemas/task.schema.js";

const router = Router();

router.get('/tasks', authRequired, getTasks )
router.get('/tasks/:id', authRequired, getTask )
router.post('/tasks', authRequired, validateSchema(createTaskSchema) ,createTask )
router.delete('/tasks/:id', authRequired, deleteTask )
router.put('/tasks/:id', authRequired, updateTask )


export default router