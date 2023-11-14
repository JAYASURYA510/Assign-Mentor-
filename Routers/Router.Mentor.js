import express from 'express';
import { createMentor, getMentorList, assignStudentToMentor, getStudentsForMentor, MultiStudForOneMen } from '../Controllers/Mentor.Controller.js';

const router = express.Router();

router.post('/creatementor', createMentor);

router.get('/getmentor', getMentorList);

router.post('/assign', assignStudentToMentor);

router.post("/assignmultiple", MultiStudForOneMen);


router.post('/studentlist', getStudentsForMentor);

export default router;