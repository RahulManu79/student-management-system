import { Router } from "express";
import catchAsync from "../utils/catchAsync";
import validate from "../middleware/validate";
import { loginValidation } from '../validation/auth.validation'
import { login } from '../controller/auth.controller'
const router = Router();

router.post('/login', validate(loginValidation), catchAsync(login));



export default router;