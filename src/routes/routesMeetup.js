import express from 'express';
import controllerformeetup from '../controllers/controllerformeetup ';
import {
  validateMeetup
} from '../Validation/meetupValidation';

const Router = express.Router();

Router.get('/', controllerformeetup.getAll);
Router.post('/', validateMeetup, controllerformeetup.create);
Router.get('/upcoming', controllerformeetup.getUpcoming);
Router.get('/:meetupId', controllerformeetup.getSingle);
Router.post('/:meetupId/rsvps', controllerformeetup.respondRsvp);

export default Router;