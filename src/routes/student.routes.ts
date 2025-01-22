import { Router } from "express";
import catchAsync from "../utils/catchAsync";
import validate from "../middleware/validate";
import { listAssignedTasksValidation, updateTaskStatusValidation, viewAssignedTasksValidation } from "../validation/student.validation";
import { listAssignedTasks, updateTaskStatus, viewAssignedTasks } from "../controller/student.controller";

const router = Router();

router.get('/list-tasks/:studentId', validate(listAssignedTasksValidation), catchAsync(listAssignedTasks));

router.get('/view-tasks/:studentId/:taskId', validate(viewAssignedTasksValidation), catchAsync(viewAssignedTasks));

router.put('/update-tasks-status', validate(updateTaskStatusValidation), catchAsync(updateTaskStatus));

export default router;