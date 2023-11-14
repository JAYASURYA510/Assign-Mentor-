import express from 'express';
import { createStudent, getStudentList } from '../Controllers/Student.Controller.js';

const router = express.Router();

router.post('/createstudent', createStudent);
router.get('/allstudentlist', getStudentList);

export default router;