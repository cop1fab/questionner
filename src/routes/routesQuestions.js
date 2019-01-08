import express from 'express';
import {
  validateQuestion
} from '../Validation/questionsValidation';
import controllerforquestion from '../controllers /controllerforquestion';

const Router = express.Router();

Router.post('/', validateQuestion, controllerforquestion.create);
Router.get('/', controllerforquestion.getAll);
Router.patch('/:questionId/upvote', controllerforquestion.upVote);
Router.patch('/:questionId/downvote', controllerforquestion.downVote);

export default Router;