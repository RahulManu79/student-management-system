import { Router } from "express";
import catchAsync from "../utils/catchAsync";
import validate from "../middleware/validate";
import { assignTaskValidation, createStudentValidation } from "../validation/admin.validation";
import { assignTask, createStudent } from "../controller/admin.controller";

const router = Router();

router.post('/create-student', validate(createStudentValidation), catchAsync(createStudent));

router.post('/assign-task', validate(assignTaskValidation), catchAsync(assignTask));


export default router;